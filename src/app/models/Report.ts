export class Report {
    id?: string;
    readonly timestamp: Date;
    readonly distance: number;
    readonly time: number;
    userId: string;

    constructor(timestamp: Date, distance: number, time: number, userId: string) {
        this.timestamp = timestamp;
        this.distance = distance;
        this.time = time;
        this.userId = userId;
    }
}
