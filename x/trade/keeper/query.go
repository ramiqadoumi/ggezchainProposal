package keeper

import (
	"github.com/ggezone/ggezchain/x/trade/types"
)

var _ types.QueryServer = Keeper{}
