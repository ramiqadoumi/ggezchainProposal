package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/ramiqadoumi/ggezchain/testutil/keeper"
	"github.com/ramiqadoumi/ggezchain/x/trade/keeper"
	"github.com/ramiqadoumi/ggezchain/x/trade/types"
	"github.com/stretchr/testify/require"
)

func setupMsgServer(t *testing.T) (types.MsgServer, context.Context) {
	k, ctx := keepertest.TradeKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

func TestMsgServer(t *testing.T) {
	ms, ctx := setupMsgServer(t)
	require.NotNil(t, ms)
	require.NotNil(t, ctx)
}
