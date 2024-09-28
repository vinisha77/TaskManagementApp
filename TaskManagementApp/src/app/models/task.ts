export class Task
{
    id: number;
    title: string;
    description: string;
    createdDate: string;
    dueDate: string;
    isCompleted: boolean;
    user: string;
    constructor(id: number, title: string, description: string, createdDate: string, dueDate: string, isCompleted: boolean, user: string)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdDate = createdDate;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
        this.user = user;
    }
}