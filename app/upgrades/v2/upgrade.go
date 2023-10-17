// Package v2
// nolint revive
package v2

import (
	"fmt"

	storetypes "github.com/cosmos/cosmos-sdk/store/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	upgradetypes "github.com/cosmos/cosmos-sdk/x/upgrade/types"
	mobilemoduletypes "github.com/mousaibrah/ggezchain/x/mobile/types"
	trademoduletypes "github.com/mousaibrah/ggezchain/x/trade/types"

	"github.com/cometbft/cometbft/libs/log"
	apptypes "github.com/mousaibrah/ggezchain/app"
	utypes "github.com/mousaibrah/ggezchain/app/upgrades/types"
)

const (
	upgradeName = "v2"
)

type upgrade struct {
	*apptypes
}

var _ utypes.IUpgrade = (*upgrade)(nil)

func initUpgrade(_ log.Logger, app *apptypes.App) (utypes.IUpgrade, error) {
	up := &upgrade{
		App: app,
	}

	if _, trade := up.ModuleManager().Modules[trademoduletypes.ModuleName]; !trade {
		return nil, fmt.Errorf("module %s has not been initialized", trademoduletypes.ModuleName) // nolint: goerr113
	}
	if _, mobile := up.ModuleManager().Modules[mobilemoduletypes.ModuleName]; !mobile {
		return nil, fmt.Errorf("module %s has not been initialized", mobilemoduletypes.ModuleName) // nolint: goerr113
	}
	return up, nil
}

func (up *upgrade) StoreLoader() *storetypes.StoreUpgrades {
	upgrades := &storetypes.StoreUpgrades{
		Added: []string{
			trademoduletypes.StoreKey,
			mobilemoduletypes.StoreKey,
		},
	}

	return upgrades
}

func (up *upgrade) UpgradeHandler() upgradetypes.UpgradeHandler {
	return func(ctx sdk.Context, plan upgradetypes.Plan, fromVM module.VersionMap) (module.VersionMap, error) {
		fromVM[mobilemoduletypes.ModuleName] = up.App.mm.Modules[mobilemoduletypes.ModuleName].ConsensusVersion()

		// create ICS27 Controller submodule params
		// enable the controller chain
		controllerParams := icacontrollertypes.Params{ControllerEnabled: true}

		// create ICS27 Host submodule params
		hostParams := icahosttypes.Params{
			// enable the host chain
			HostEnabled: true,
			// allowing the all messages
			AllowMessages: []string{"*"},
		}

		ctx.Logger().Info("start to init interchainaccount module...")
		// initialize ICS27 module
		up.MM.Modules[icatypes.ModuleName].(ica.AppModule).InitModule(ctx, controllerParams, hostParams)

		ctx.Logger().Info("start to run module migrations...")

		return up.MM.RunMigrations(ctx, up.Configurator, fromVM)
	}
}
