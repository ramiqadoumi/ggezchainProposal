package v2

import (
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mousaibrah/ggezchain/x/trade/exported"
	"github.com/mousaibrah/ggezchain/x/trade/types"
)

const (
	ModuleName = "trade"
)

var ParamsKey = []byte{0x01}

// Migrate migrates the x/mint module state from the consensus version 1 to
// version 2. Specifically, it takes the parameters that are currently stored
// and managed by the x/params modules and stores them directly into the x/mint
// module state.
func Migrate(
	ctx sdk.Context,
	store sdk.KVStore,
	legacySubspace exported.Subspace,
	cdc codec.BinaryCodec,
) error {
	var currParams types.Params
	legacySubspace.GetParamSet(ctx, &currParams)

	if err := currParams.Validate(); err != nil {
		return err
	}

	bz := cdc.MustMarshal(&currParams)
	store.Set(ParamsKey, bz)

	return nil
}
func MigrateStore(ctx sdk.Context,
	store sdk.KVStore,
	legacySubspace exported.Subspace,
	cdc codec.BinaryCodec) error {
    return migrateValuesWithPrefix(store, cdc,legacySubspace,ctx)
}

func migrateValuesWithPrefix(store sdk.KVStore, cdc codec.BinaryCodec,legacySubspace exported.Subspace,ctx sdk.Context,) error {
    oldStoreIter := store.Iterator(nil, nil)
  
    for ; oldStoreIter.Valid(); oldStoreIter.Next() {
        oldKey := oldStoreIter.Key()	
        var currParams types.Params
	 legacySubspace.GetParamSet(ctx, &currParams)

	if err := currParams.Validate(); err != nil {
		return err
	}

	bz := cdc.MustMarshal(&currParams)
	store.Set(ParamsKey, bz)
        store.Delete(oldKey) // Delete old key, value
    }
  
    return nil
}

