import { Window } from './window';

export class Layout {
    constructor(private id: number,
                private name: string,
                private windows: Window[]) { }
}
