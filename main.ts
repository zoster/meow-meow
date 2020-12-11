input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P2, 50)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(500)
    }
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P2, 0)
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("E F G A B C5 - - ", 120)
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
	
})
basic.showString("meow!")
pins.digitalWritePin(DigitalPin.P1, 0)
basic.pause(200)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.pause(200)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        # # # # #
        `)
})
