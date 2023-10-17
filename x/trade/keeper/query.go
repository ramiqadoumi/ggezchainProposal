package keeper

import (
	"github.com/mousaibrah/ggezchain/x/trade/types"
)

var _ types.QueryServer = Keeper{}
