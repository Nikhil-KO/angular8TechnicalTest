export interface IToDo {
    id: number;
    label: string;
    description: string;
    category: string;
    done;
    hidden?: boolean;
    editing?: boolean;
}
