import Phaser from 'phaser'
import Breakout from './scenes/Breakout'

import { bounds } from './const'

const config = {
    width: bounds.width,
    height: bounds.height,
    parent: 'content',
    physics: {
        default: 'arcade'
    },
    scene: [Breakout]
}

const game = new Phaser.Game(config)
