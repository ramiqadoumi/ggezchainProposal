package app

import (
	"fmt"

	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"

	utypes "github.com/mousaibrah/ggezchain/app/upgrades/types"
	// nolint: revive
	_ "github.com/mousaibrah/ggezchain/app/upgrades"
)

func (app *App) registerUpgradeHandlers() error {
	upgradeInfo, err := app.UpgradeKeeper.ReadUpgradeInfoFromDisk()
	if err != nil {
		return err
	}

	for name, fn := range utypes.GetUpgradesList() {
		app.Logger().Info(fmt.Sprintf("initializing upgrade `%s`", name))
		upgrade, err := fn(app.Logger(), &app.App)
		if err != nil {
			return fmt.Errorf("unable to unitialize upgrade `%s`: %w", name, err)
		}

		app.UpgradeKeeper.SetUpgradeHandler(name, upgrade.UpgradeHandler())
		if storeUpgrades := upgrade.StoreLoader(); storeUpgrades != nil && upgradeInfo.Name == name {
			app.Logger().Info(fmt.Sprintf("applying store upgrades for `%s`", name))
			app.SetStoreLoader(upgradetypes.UpgradeStoreLoader(upgradeInfo.Height, storeUpgrades))
		}
	}

	return nil
}