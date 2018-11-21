import { Window } from './window';

export class Layout {
    constructor(public id: string,
                public name: string,
                public windows: Window[]) { }
}
