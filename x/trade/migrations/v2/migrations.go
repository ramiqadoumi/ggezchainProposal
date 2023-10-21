package v2

import (
	"github.com/cosmos/cosmos-sdk/codec"
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func MigrateStore(ctx sdk.Context, storeKey storetypes.StoreKey, cdc codec.BinaryCodec) error {
	store := ctx.KVStore(storeKey)
	ctx.Logger().With("Stoooooooooooooooooooooooooooooooooooore", store)
	err := migrateValuesWithPrefix(store, cdc,ctx)
	if err != nil {
		return err
	}

	return nil
}
func migrateValuesWithPrefix(store sdk.KVStore, cdc codec.BinaryCodec,ctx sdk.Context, ) error {
    oldStoreIter := store.Iterator(nil, nil)
  
    for ; oldStoreIter.Valid(); oldStoreIter.Next() {
        oldKey := oldStoreIter.Key()  
		ctx.Logger().With("Keeeeeeeeeeeeeeeeeey", oldKey)

        store.Delete(oldKey) // Delete old key, value
    }
  
    return nil
}
