package trade_test

import (
	"testing"

	keepertest "github.com/ggezone/ggezchain/testutil/keeper"
	"github.com/ggezone/ggezchain/testutil/nullify"
	"github.com/ggezone/ggezchain/x/trade"
	"github.com/ggezone/ggezchain/x/trade/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		TradeIndex: types.TradeIndex{
			NextId: 63,
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

	k, ctx := keepertest.TradeKeeper(t)
	trade.InitGenesis(ctx, *k, genesisState)
	got := trade.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.TradeIndex, got.TradeIndex)
	require.ElementsMatch(t, genesisState.StoredTradeList, got.StoredTradeList)
	// this line is used by starport scaffolding # genesis/test/assert
}
