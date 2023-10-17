package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/mousaibrah/ggezchain/testutil/keeper"
	"github.com/mousaibrah/ggezchain/testutil/nullify"
	"github.com/mousaibrah/ggezchain/x/mobile/types"
)

func TestMobileIndexQuery(t *testing.T) {
	keeper, ctx := keepertest.MobileKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestMobileIndex(keeper, ctx)
	tests := []struct {
		desc     string
		request  *types.QueryGetMobileIndexRequest
		response *types.QueryGetMobileIndexResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetMobileIndexRequest{},
			response: &types.QueryGetMobileIndexResponse{MobileIndex: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	}
	for _, tc := range tests {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.MobileIndex(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
