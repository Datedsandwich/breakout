import Phaser from 'phaser'
import assets from '../const'

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
        console.log('preloading')
        this.load.atlas('assets', 'assets/breakout.png', 'assets/breakout.json')
    }

    create() {
        console.log('creating')

        this.physics.world.setBoundsCollision(true, true, true, false)

        const frame = [
            assets.blue1,
            assets.red1,
            assets.green1,
            assets.yellow1,
            assets.silver1,
            assets.purple1
        ]

        this.bricks = this.physics.add.staticGroup({
            key: 'assets',
            frame,
            frameQuantity: 10,
            gridAlign: { width: 10, height: 6, cellWidth: 64, cellHeight: 32, x: 112, y: 100 }
        })
    }
}

export default Breakout
