export interface Address {
    street: string;
    city: string;
}

export interface Users {
    id: number;
    name: string;
    email: string;
    address: Address;
}

export interface Todos {
    id: number;
    title: string;
    completed: boolean;
}