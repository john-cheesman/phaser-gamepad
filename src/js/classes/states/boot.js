import {dimensions} from '../../config';

export class Boot extends Phaser.State {
    constructor(game) {
        super(game);
    }

    create() {
        if (!this.game.device.desktop) {
            this.scale.maxWidth = dimensions.gameWidth;
            this.scale.maxHeight = dimensions.gameHeight;
            this.scale.forceLandscape = false;
            this.scale.forcePortrait = true;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setScreenSize(true);
            this.scale.pageAlignHorizontally = true;
        }

        this.state.start('Preloader');
    }
}
