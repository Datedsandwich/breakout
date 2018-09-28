import Phaser from 'phaser'
import assets from '../const/assets'
import keys from '../const/keys'
import scenes from '../const/scenes'

class Breakout extends Phaser.Scene {
    constructor() {
        super({
            key: scenes.breakout
        })

        this.bricks
        this.paddle
        this.ball
    }

    preload() {
        this.load.atlas(keys.assets, 'assets/breakout.png', 'assets/breakout.json')
    }

    create() {
        this.physics.world.setBoundsCollision(true, true, true, false)

        this.setUpObjects()

        this.physics.add.collider(this.ball, this.bricks, this.hitBrick, null, this)
        this.physics.add.collider(this.ball, this.paddle, this.hitPaddle, null, this)
    }

    update() {
        if (this.ball.y > this.cameras.main.width) {
            this.resetBall()
        }
    }

    hitBrick(ball, brick) {
        brick.disableBody(true, true)

        if (this.bricks.countActive() === 0) {
            this.resetLevel()
        }
    }

    hitPaddle(ball, paddle) {
        const modifier = 5
        if (ball.x < paddle.x) {
            ball.setVelocityX(-modifier * (paddle.x - ball.x))
        } else if (ball.x > paddle.x) {
            ball.setVelocityX(modifier * (ball.x - paddle.x))
        } else {
            ball.setVelocityX(2 + Math.random() * modifier)
        }
    }

    resetBall() {
        this.ball.setVelocity(0)
        this.ball.setPosition(this.paddle.x, 500)
        this.ball.setData('onPaddle', true)
    }

    resetLevel() {
        this.resetBall()

        this.bricks.children.entries.forEach(brick => {
            brick.enableBody(false, 0, 0, true, true)
        })
    }

    setUpObjects() {
        this.bricks = this.physics.add.staticGroup({
            key: keys.assets,
            frame: assets.bricks,
            frameQuantity: 10,
            gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 }
        })

        this.ball = this.physics.add
            .image(400, 500, keys.assets, assets.ball)
            .setCollideWorldBounds(true)
            .setBounce(1)

        this.ball.setData('onPaddle', true)

        this.paddle = this.physics.add.image(400, 550, keys.assets, assets.paddle).setImmovable()

        this.setUpInputEvents()
    }

    setUpInputEvents() {
        const initialVelocity = {
            x: -75,
            y: -300
        }

        this.input.on(
            'pointermove',
            pointer => {
                this.paddle.x = Phaser.Math.Clamp(pointer.x, 52, 748)

                if (this.ball.getData('onPaddle')) {
                    this.ball.x = this.paddle.x
                }
            },
            this
        )

        this.input.on(
            'pointerup',
            pointer => {
                if (this.ball.getData('onPaddle')) {
                    this.ball.setVelocity(initialVelocity.x, initialVelocity.y)
                    this.ball.setData('onPaddle', false)
                }
            },
            this
        )

        this.input.keyboard.on('keydown_ESC', event => {
            this.scene.start(scenes.title)
        })
    }
}

export default Breakout
