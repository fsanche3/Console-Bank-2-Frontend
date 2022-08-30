import { Checkings } from "./checkings";
import { Savings } from "./savings";

export class Bankuser {

    id: number;
    name: string;
    username: string;
    password: string;
    email: string;
    checkings: Checkings[];
    savings: Savings[];

    constructor(id: number, name: string, username: string, password: string, email: string, checkings: Checkings[], savings: Savings[]){
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.checkings = checkings;
        this.savings = savings;
    }
}
