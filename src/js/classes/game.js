import {Boot} from './states/boot';
import {Preloader} from './states/preloader';
import {Overworld} from './states/overworld';
import {dimensions} from '../config';

export class Game extends Phaser.Game {
    constructor() {
        super(dimensions.gameWidth, dimensions.gameHeight, Phaser.AUTO, 'gameScreen');

        this.controls = {};
        this.controlStates = {};

        this.state.add('Boot', Boot);

        this.state.add('Preloader', Preloader);

        this.state.add('Overworld', () => {
            return new Overworld('town');
        });

        this.state.start('Boot');
    }

    toggleFullScreen() {
        if (this.scale.isFullScreen) {
            this.scale.stopFullScreen();
        }
        else {
            this.scale.startFullScreen(false);
        }
    }
}
