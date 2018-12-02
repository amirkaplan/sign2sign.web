import { Medium } from './medium';

export class Playlist {
    constructor(public id: string,
                public name: string,
                public media: Medium) { }
}
