let vzdalenost = 0
basic.showIcon(IconNames.Snake)
basic.pause(1000)
cuteBot.forward()
basic.forever(function () {
    vzdalenost = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (vzdalenost >= 0 && vzdalenost < 15) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 4; index++) {
            music.playTone(880, music.beat(BeatFraction.Quarter))
        }
        basic.pause(2000)
        cuteBot.motors(randint(-50, -100), 0)
        basic.pause(500)
    } else {
        cuteBot.forward()
    }
})
