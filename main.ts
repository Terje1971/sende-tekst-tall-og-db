radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (radio.receivedPacket(RadioPacketProperty.SignalStrength)))
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    radio.sendString("Hei pa deg B")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
