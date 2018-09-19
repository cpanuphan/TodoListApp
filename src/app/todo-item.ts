export class TodoItem {
    id: number;
    name: string;
    isComplete: boolean;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
