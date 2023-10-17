package app // upgrades.go

import (
	"fmt"
	// imports for upgrades version and upgrade handler
	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	V2 "github.com/mousaibrah/ggezchain/app/upgrades/v2"
		sdk "github.com/cosmos/cosmos-sdk/types"
	mobile "github.com/mousaibrah/ggezchain/x/mobile/types"
	trade "github.com/mousaibrah/ggezchain/x/trade/types"
	tradeModule "github.com/mousaibrah/ggezchain/x/trade"
	mobileModule "github.com/mousaibrah/ggezchain/x/mobile"
	mobileKeeper "github.com/mousaibrah/ggezchain/x/mobile/keeper"
)
var (
	genState mobile.GenesisState
	keeper mobileKeeper.Keeper
)
func (app *App) setupUpgradeHandlers(configurator module.Configurator) {
	// set up v2 upgrade handler
	app.UpgradeKeeper.SetUpgradeHandler(
		V2.UpgradeName,
		func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {
			// ...
			// Set foo's version to the latest ConsensusVersion in the VersionMap.
			// This will skip running InitGenesis on Foo
			fromVM[mobile.ModuleName] = mobileModule.AppModule{}.ConsensusVersion()
			fromVM[trade.ModuleName] = tradeModule.AppModule{}.ConsensusVersion()
			mobileModule.InitGenesis(ctx, keeper, genState)
		
			return app.mm.RunMigrations(ctx,app.configurator, fromVM)
		})

	// When a planned update height is reached, the old binary will panic
	// writing on disk the height and name of the update that triggered it
	// This will read that value, and execute the preparations for the upgrade.
	upgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()

	if err != nil {
		panic(fmt.Errorf("failed to read upgrade info from disk: %w", err))
	}

	if app.UpgradeKeeper.IsSkipHeight(upgradeInfo.Height) {
		return
	}

	var storeUpgrades *storetypes.StoreUpgrades

	switch upgradeInfo.Name {
	// sign the changes you need to do every upgrade coming
	case V2.UpgradeName:
		storeUpgrades = &storetypes.StoreUpgrades{
			Added: []string{"feesplit",mobile.StoreKey,trade.StoreKey},
		}

	}

	if storeUpgrades != nil {
		app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, storeUpgrades))
	}
}
