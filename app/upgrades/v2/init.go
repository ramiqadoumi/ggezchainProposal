// Package v2
// nolint revive
package v2

import (
	utypes "github.com/mousaibrah/ggezchain/app/upgrades/types"
)

func init() {
	utypes.RegisterUpgrade(upgradeName, initUpgrade)
}