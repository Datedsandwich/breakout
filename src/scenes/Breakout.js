import Phaser from 'phaser'
import { assets, keys } from '../const'

class Breakout extends Phaser.Scene {
    constructor() {
        super({
            key: 'breakout'
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
                    this.ball.setVelocity(-75, -300)
                    this.ball.setData('onPaddle', false)
                }
            },
            this
        )
    }
}

export default Breakout
