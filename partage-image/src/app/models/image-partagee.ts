export class ImagePartagee {

    location?: string;
    id: string;

    constructor(public title: string,
                public description: string,
                public imageUrl: string,
                public createdAt: Date,
                public likes: number,
            ) {
                this.id = crypto.randomUUID().substring(0, 8);
                console.log(this)
            }

    addLike(): void {
        this.likes++
    }
    removeLike(): void {
        this.likes--
    }
    
    setLocation(location: string): void {
        this.location = location
    }

    withLocation(location: string): ImagePartagee {
        this.setLocation(location);
        return this
    }
}