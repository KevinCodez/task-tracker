export class Task {
    public id?: number;
    public text: string;
    public day: string;
    public reminder: boolean;

    constructor(id: number, text: string, day: string, reminder: string) {
        this.id = id;
        this.text = text;
        this.day = day;
        this.reminder = false;
    }
}