import Phaser from 'phaser'
import Breakout from './scenes/Breakout'

const config = {
    width: 800,
    height: 600,
    parent: 'content',
    physics: {
        default: 'arcade'
    },
    scene: [Breakout]
}

const game = new Phaser.Game(config)
