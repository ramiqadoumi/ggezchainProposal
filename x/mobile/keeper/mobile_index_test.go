package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/mobile/keeper"
	"github.com/mousaibrah/ggezchain/x/mobile/types"
)

func createTestMobileIndex(keeper *keeper.Keeper, ctx sdk.Context) types.MobileIndex {
	item := types.MobileIndex{}
	keeper.SetMobileIndex(ctx, item)
	return item
}

func TestMobileIndexGet(t *testing.T) {
	keeper, ctx := keepertest.MobileKeeper(t)
	item := createTestMobileIndex(keeper, ctx)
	rst, found := keeper.GetMobileIndex(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestMobileIndexRemove(t *testing.T) {
	keeper, ctx := keepertest.MobileKeeper(t)
	createTestMobileIndex(keeper, ctx)
	keeper.RemoveMobileIndex(ctx)
	_, found := keeper.GetMobileIndex(ctx)
	require.False(t, found)
}
