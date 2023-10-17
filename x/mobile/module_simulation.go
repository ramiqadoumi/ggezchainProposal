package mobile

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/mousaibrah/ggezchain/testutil/sample"
	mobilesimulation "github.com/mousaibrah/ggezchain/x/mobile/simulation"
	"github.com/mousaibrah/ggezchain/x/mobile/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = mobilesimulation.FindAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
	_ = rand.Rand{}
)

const (
	opWeightMsgInsertMobileNumber = "op_weight_msg_insert_mobile_number"
	// TODO: Determine the simulation weight value
	defaultWeightMsgInsertMobileNumber int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	mobileGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&mobileGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgInsertMobileNumber int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgInsertMobileNumber, &weightMsgInsertMobileNumber, nil,
		func(_ *rand.Rand) {
			weightMsgInsertMobileNumber = defaultWeightMsgInsertMobileNumber
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgInsertMobileNumber,
		mobilesimulation.SimulateMsgInsertMobileNumber(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgInsertMobileNumber,
			defaultWeightMsgInsertMobileNumber,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				mobilesimulation.SimulateMsgInsertMobileNumber(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
