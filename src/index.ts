import Phaser from 'phaser';
import { World } from 'ape-ecs';
import { Position, Velocity, Word, AudioData } from './components';
import { MovementSystem, RenderSystem } from './systems';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#1d1d1d',
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
const world = new World();

function preload() {
    // Load assets here
}

function create() {
    world.registerComponent(Position);
    world.registerComponent(Velocity);
    world.registerComponent(Word);
    world.registerComponent(AudioData);

    world.registerSystem("Movement", MovementSystem)
    world.registerSystem("GFX", RenderSystem);

    // Example entity creation
    world.createEntity({
        components: [
            { type: "Position", x: 0, y: 0 },
            { type: "Velocity", dx: 1, dy: 0 },
            { type: "Word", text: 'example' },
            { type: "AudioData", syllables: 0 },
        ],
        tag:"test",
    });
}

function update(time: number, delta: number) {
    world.runSystems("Movement");
    world.runSystems("GFX");
}