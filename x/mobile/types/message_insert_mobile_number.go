package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgInsertMobileNumber = "insert_mobile_number"

var _ sdk.Msg = &MsgInsertMobileNumber{}

func NewMsgInsertMobileNumber(creator string, tradeType string, coin string, price string, quantity string, receiverAddress string, tradeData string) *MsgInsertMobileNumber {
	return &MsgInsertMobileNumber{
		Creator:         creator,
		TradeType:       tradeType,
		Coin:            coin,
		Price:           price,
		Quantity:        quantity,
		ReceiverAddress: receiverAddress,
		TradeData:       tradeData,
	}
}

func (msg *MsgInsertMobileNumber) Route() string {
	return RouterKey
}

func (msg *MsgInsertMobileNumber) Type() string {
	return TypeMsgInsertMobileNumber
}

func (msg *MsgInsertMobileNumber) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgInsertMobileNumber) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgInsertMobileNumber) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
