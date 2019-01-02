
export class Student {
    private static currentId = 0;

    private id: number;

    getId(): number {
        return this.id;
    }

    constructor(public firstname: string, public lastname: string, public registrationNumber: string) {
        this.id = Student.currentId++;
    }
}
