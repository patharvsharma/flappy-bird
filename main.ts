input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let bird: game.LedSprite = null
let obstacles: number[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let emptyObstacle = randint(0, 4)
for (let index = 0; index <= 4; index++) {
    if (index != emptyObstacle) {
        let list: game.LedSprite[] = []
        list.push(game.createSprite(4, list))
    }
}
basic.forever(function () {
    for (let obstacles of obstacles) {
        obstacles.change(LedSpriteProperty.X, -1)
    }
})
