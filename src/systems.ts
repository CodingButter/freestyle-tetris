import { Query, System, World, Entity } from 'ape-ecs';
import { Position, Velocity, AudioData } from './components';

export class MovementSystem extends System {
    private query:Query|null
    constructor(world:World){
        super(world);
        this.query = null;
    }
    init() {
        this.query = this.createQuery().fromAll(Position, Velocity, AudioData);
    }

    update(tick:integer) {
        const entities = this?.query?.execute() ||  new Set<Entity>()
        for (const entity of entities) {
            const pos = entity.getOne(Position) as Position;
            const vel = entity.getOne(Velocity) as Velocity
            const audio = entity.getOne(AudioData) as AudioData

            pos.x += vel.dx * audio.syllables;
            pos.y += vel.dy;
        }
    }
}

export class RenderSystem extends System {
    private query:Query|null
    constructor(world:World){
        super(world)
        this.query = null
    }
    init() {
        this.query = this.createQuery().fromAll(Position);
    }

    update(tick:integer) {
        const entities = this?.query?.execute() || new Set<Entity>();
        for (const entity of entities) {
            const pos = entity.getOne(Position);
            // Render logic using Phaser or other rendering library
        }
    }
}