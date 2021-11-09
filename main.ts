namespace SpriteKind {
    export const Asteroid = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Asteroid, function (sprite, otherSprite) {
    music.bigCrash.play()
})
// 8 Concepts Learned (Pick the 8 you used, delete the others):
// 
// -Sprites
// 
// -Sprite Position (coordinates: x and y)
// 
// -Controller (dx) and move mySprite with buttons
// 
// -overlap Events / sprite kind
// 
// -"Spawning" sprites: create and on created
// 
// -random
// 
// -Displaying numbers (1, 2, 3) as a string ("123")
// 
// -score and life
// 
// -countdown
// 
// -stay in screen and ghost
// 
// -set image
// 
// -sprite say
// 
// -splash
// 
// Key Features (List the Key Features You Will Need For Your Game, replace examples)
// 
// - ex. Playable Sprite
// 
// - ex. player can move up/down left/right
// 
// - ex. player can collide with enemy
// 
// - ex. enemy decreases player life
controller.player1.moveSprite(sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player), 100, 100)
namespace asteroids {
    sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(1500, function () {
        sprites.create(sprites.space.spaceAsteroid0, SpriteKind.Asteroid);
    });

    function setMotion(asteroid: Sprite) {
        asteroid.vx = randint(-8, 8);
        asteroid.vy = randint(35, 20);
    }

    function setPosition(sprite: Sprite, edge: number) {
        sprite.x = randint(edge, screen.width - edge);
        sprite.y = 0;
    }
}
let intro = "Hello! This is my Space Game!"
game.splash(intro)
let x = 80
let y = 100
