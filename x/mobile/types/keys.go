package types

const (
	// ModuleName defines the module name
	ModuleName = "mobile"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_mobile"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
func PrefixCertificateID() []byte {
	return []byte{0x01}
}
const (
	MobileIndexKey = "MobileIndex/value/"
)
