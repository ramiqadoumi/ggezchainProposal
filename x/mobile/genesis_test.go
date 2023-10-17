package mobile_test

import (
	"testing"

	keepertest "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/mobile"
	"github.com/mousaibrah/ggezchain/x/mobile/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		MobileIndex: types.MobileIndex{
			NextId: 75,
		},
		StoredTradeList: []types.StoredTrade{
			{
				TradeIndex: "0",
			},
			{
				TradeIndex: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MobileKeeper(t)
	mobile.InitGenesis(ctx, *k, genesisState)
	got := mobile.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.MobileIndex, got.MobileIndex)
	require.ElementsMatch(t, genesisState.StoredTradeList, got.StoredTradeList)
	// this line is used by starport scaffolding # genesis/test/assert
}
