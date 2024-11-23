import { Component } from 'ape-ecs';

export class Position extends Component {
    static properties = {
        x: 0,
        y: 0
    };
}

export class Velocity extends Component {
    static properties = {
        dx: 0,
        dy: 0
    };
}

export class Word extends Component {
    static properties = {
        text: ''
    };
}

export class AudioData extends Component {
    static properties = {
        syllables: 0
    };
}