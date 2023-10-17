package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mousaibrah/ggezchain/x/mobile/types"
)

// SetMobileIndex set mobileIndex in the store
func (k Keeper) SetMobileIndex(ctx sdk.Context, mobileIndex types.MobileIndex) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MobileIndexKey))
	b := k.cdc.MustMarshal(&mobileIndex)
	store.Set([]byte{0}, b)
}

// GetMobileIndex returns mobileIndex
func (k Keeper) GetMobileIndex(ctx sdk.Context) (val types.MobileIndex, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MobileIndexKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMobileIndex removes mobileIndex from the store
func (k Keeper) RemoveMobileIndex(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MobileIndexKey))
	store.Delete([]byte{0})
}
