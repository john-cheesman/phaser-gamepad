import {animations, frames} from '../config';

export class Player extends Phaser.Sprite {
    constructor(game, x, y, key, direction = 'down') {
        super(game, x, y, key);

        this.animations.add('up', animations.player.walk.up, 10);
        this.animations.add('right', animations.player.walk.right, 10);
        this.animations.add('down', animations.player.walk.down, 10);
        this.animations.add('left', animations.player.walk.left, 10);

        this.keyboard = this.game.input.keyboard;

        this.controls = {
            up: Phaser.Keyboard.W,
            down: Phaser.Keyboard.S,
            left: Phaser.Keyboard.A,
            right: Phaser.Keyboard.D
        };

        this.direction = direction;

        this.frame = frames.player[this.direction];
    }

    create() {
        this.game.physics.arcade.enable(this);

        this.game.camera.follow(this);

        this.game.add.existing(this);

        this.body.setSize(32, 20, 0, 12);
    }

    update() {
        if (this.keyboard.isDown(this.controls.up) || this.game.controlStates.up) {
            this.body.velocity.y = -300;
            this.body.velocity.x = 0;
            this.animations.play('up');
            this.direction = 'up';
        }
        else if (this.keyboard.isDown(this.controls.down) || this.game.controlStates.down) {
            this.body.velocity.y = 300;
            this.body.velocity.x = 0;
            this.animations.play('down');
            this.direction = 'down';
        }
        else if (this.keyboard.isDown(this.controls.left) || this.game.controlStates.left) {
            this.body.velocity.x = -300;
            this.body.velocity.y = 0;
            this.animations.play('left');
            this.direction = 'left';
        }
        else if (this.keyboard.isDown(this.controls.right) || this.game.controlStates.right) {
            this.body.velocity.x = 300;
            this.body.velocity.y = 0;
            this.animations.play('right');
            this.direction = 'right';
        }
        else {
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            this.animations.stop();
            this.frame = frames.player[this.direction];
        }
    }
}
