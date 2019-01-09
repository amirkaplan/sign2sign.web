import { Player } from './player';

export class Screen {
    constructor(public id: string,
                public name: string,
                public player: Player) { }
}
