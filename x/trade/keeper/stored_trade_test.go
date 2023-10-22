package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/ramiqadoumi/ggezchain/testutil/keeper"
	"github.com/ramiqadoumi/ggezchain/testutil/nullify"
	"github.com/ramiqadoumi/ggezchain/x/trade/keeper"
	"github.com/ramiqadoumi/ggezchain/x/trade/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNStoredTrade(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredTrade {
	items := make([]types.StoredTrade, n)
	for i := range items {
		items[i].TradeIndex = uint64(i)

		keeper.SetStoredTrade(ctx, items[i])
	}
	return items
}

func TestStoredTradeGet(t *testing.T) {
	keeper, ctx := keepertest.TradeKeeper(t)
	items := createNStoredTrade(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredTrade(ctx,
			item.TradeIndex,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredTradeRemove(t *testing.T) {
	keeper, ctx := keepertest.TradeKeeper(t)
	items := createNStoredTrade(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredTrade(ctx,
			item.TradeIndex,
		)
		_, found := keeper.GetStoredTrade(ctx,
			item.TradeIndex,
		)
		require.False(t, found)
	}
}

func TestStoredTradeGetAll(t *testing.T) {
	keeper, ctx := keepertest.TradeKeeper(t)
	items := createNStoredTrade(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredTrade(ctx)),
	)
}
