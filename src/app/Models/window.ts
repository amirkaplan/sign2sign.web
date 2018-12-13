import { Playlist } from "./plylist";

export class Window {
    constructor(public id: string,
                public width: string,
                public height: string,
                public top: string,
                public left: string,
                public zindex: string,
                public playlist: Playlist) { }
}
