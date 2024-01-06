import { Connection } from "./connection.model";

export interface UserAccount {
    name: string;
    username: string;
    password: string;
    connection: Connection
}
