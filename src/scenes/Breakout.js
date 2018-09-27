import Phaser from 'phaser'

class Breakout extends Phaser.Scene {
    constructor() {
        super({
            key: 'breakout'
        })
    }

    preload = () => {
        this.load.atlas('assets', 'assets/breakout.png', 'assets/breakout.json')
    }

    create = () => {
        this.physics.world.setBoundsCollision(true, true, true, false)
    }
}
