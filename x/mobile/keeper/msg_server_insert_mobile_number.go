package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mousaibrah/ggezchain/x/mobile/types"
)

func (k msgServer) InsertMobileNumber(goCtx context.Context, msg *types.MsgInsertMobileNumber) (*types.MsgInsertMobileNumberResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgInsertMobileNumberResponse{}, nil
}
