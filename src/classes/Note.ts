export class Note {
    constructor (
        private id: string,
        private title: string,
        private isCompleted: boolean = false,
    ){}

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getCompleted() {
        return this.isCompleted;
    }

    setCompleted(isCompleted: boolean) {
        this.isCompleted = isCompleted;
    }

    //solo para testing
    getLength() {
        return this.title.length;
    }
}