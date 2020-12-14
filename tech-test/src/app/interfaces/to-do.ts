export interface ToDo {
    id: number;
    label: string;
    description: string;
    category: string;
    done;
    hidden?: boolean;
}
