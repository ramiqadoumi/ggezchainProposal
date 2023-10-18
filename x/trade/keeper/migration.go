package keeper // migrations.go

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	v2 "github.com/mousaibrah/ggezchain/x/trade/migrations/v2"
	 "github.com/mousaibrah/ggezchain/x/trade/exported"
)

type Migrator struct {
	keeper Keeper
	legacySubspace exported.Subspace
}

// NewMigrator returns a new Migrator.
func NewMigrator(k Keeper, ss exported.Subspace) Migrator {
	return Migrator{
		keeper:         k,
		legacySubspace: ss,
	}
}

// Migrate1to2 migrates from version 1 to 2.
func (m Migrator) Migrate1to2(ctx sdk.Context) error {
	return v2.Migrate(ctx, ctx.KVStore(m.keeper.storeKey), m.legacySubspace, m.keeper.cdc)
}
