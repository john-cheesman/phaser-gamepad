import {Player} from './player';
import {dimensions, sprites, frames, controls} from '../config';

export class Area extends Phaser.State {
    constructor(tileMap) {
        super();

        this.tileMap = tileMap;
        this.tileMapPath = '/maps/' + tileMap + '.json';
    }

    preload() {
        this.game.load.tilemap(this.tileMap, this.tileMapPath, null, Phaser.Tilemap.TILED_JSON);
    }

    create() {


        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.player = new Player(this.game, (dimensions.tileSize * 13), (dimensions.tileSize * 12), sprites.tileSet.key, 'down');

        this.map = this.game.add.tilemap(this.tileMap);

        this.map.addTilesetImage(sprites.tileSet.name, sprites.tileSet.key);

        this.baseLayer = this.map.createLayer('baseLayer');
        this.subGroundLayer = this.map.createLayer('subGroundLayer');
        this.superGroundLayer = this.map.createLayer('superGroundLayer');
        this.subCollisionLayer = this.map.createLayer('subCollisionLayer');
        this.superCollisionLayer = this.map.createLayer('superCollisionLayer');

        this.map.setCollisionByExclusion([], true, this.subCollisionLayer);
        this.map.setCollisionByExclusion([], true, this.superCollisionLayer);

        this.baseLayer.resizeWorld();

        this.player.create();

        for (let i = 0; i < controls.length; i++) {
            this.game.controls[controls[i].name] = this.game.add.button(
                controls[i].x,
                controls[i].y,
                'controls',
                null,
                this,
                frames.controls[controls[i].name].light,
                frames.controls[controls[i].name].light,
                frames.controls[controls[i].name].dark,
                frames.controls[controls[i].name].light);

            this.game.controls[controls[i].name].fixedToCamera = true;

            this.game.controlStates[controls[i].name] = false;

            this.game.controls[controls[i].name].events.onInputDown.add(() => {
                this.game.controlStates[controls[i].name] = true;
            });

            this.game.controls[controls[i].name].events.onInputUp.add(() => {
                this.game.controlStates[controls[i].name] = false;
            });
        }
    }

    update() {
        this.player.update();

        this.game.physics.arcade.collide(this.player, this.subCollisionLayer);
        this.game.physics.arcade.collide(this.player, this.superCollisionLayer);
    }

    render() {
        this.game.debug.text(`Up: ${this.game.controlStates.up}`, 10, 20);
        this.game.debug.text(`Down: ${this.game.controlStates.down}`, 10, 40);
        this.game.debug.text(`Left: ${this.game.controlStates.left}`, 10, 60);
        this.game.debug.text(`Right: ${this.game.controlStates.right}`, 10, 80);
        this.game.debug.text(`A: ${this.game.controlStates.a}`, 10, 100);
        this.game.debug.text(`B: ${this.game.controlStates.b}`, 10, 120);
        this.game.debug.text(`Start: ${this.game.controlStates.start}`, 10, 140);
        this.game.debug.text(`Select: ${this.game.controlStates.select}`, 10, 160);

    }
}
