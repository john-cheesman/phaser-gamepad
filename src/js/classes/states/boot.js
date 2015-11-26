import {dimensions} from '../../config';

export class Boot extends Phaser.State {
    constructor(game) {
        super(game);
    }

    create() {
        let startText;

        startText = this.add.text(this.world.centerX, this.world.centerY, 'Start Game', {font: '20px monospace', fill: '#ffffff', align: 'center'});
        startText.anchor.set(0.5);
        startText.inputEnabled = true;
        startText.events.onInputDown.add(this.startGame, this);

        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
    }

    startGame() {
        if (!this.game.device.desktop) {
            this.game.scale.startFullScreen(true);
        }

        this.state.start('Preloader');
    }
}
