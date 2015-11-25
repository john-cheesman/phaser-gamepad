import {dimensions, sprites, frames} from '../../config';

export class Preloader extends Phaser.State {
    constructor(game) {
        super(game);
    }

    preload() {
        this.game.load.spritesheet(sprites.tileSet.key, sprites.tileSet.path, 32, 32, 254);
        this.game.load.spritesheet(sprites.controls.key, sprites.controls.path, 40, 40, 16);
    }

    create() {
        this.state.start('Overworld');
    }
}
