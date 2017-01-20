export class Post {
    constructor (
        public id: number | string,
        public title: string,
        public img: string,
        public description: string,
        public link: string,
        public date: Date) {
    }
}