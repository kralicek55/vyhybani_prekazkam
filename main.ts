input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    muze_jet = 1
})
let vzdalenost = 0
let muze_jet = 0
muze_jet = 0
basic.showIcon(IconNames.Snake)
basic.pause(1000)
basic.forever(function () {
    if (muze_jet == 1) {
        vzdalenost = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
        basic.showString("" + (vzdalenost))
        if (vzdalenost >= 0 && vzdalenost < 20) {
            cuteBot.motors(0, 0)
            for (let index = 0; index < 4; index++) {
                music.playTone(880, music.beat(BeatFraction.Quarter))
            }
            basic.pause(2000)
            cuteBot.motors(randint(-50, -100), 0)
            basic.pause(500)
        } else {
            cuteBot.motors(50, 50)
        }
    }
})
