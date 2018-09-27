import Phaser from 'phaser'
import Breakout from './scenes/Breakout'

const config = {
    width: 500,
    height: 500,
    parent: 'content',
    scene: [Breakout]
}

const game = new Phaser.Game(config)
