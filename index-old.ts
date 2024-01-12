const nombre: string = "Ivan";
const edad: number = 99;
const esMayor: boolean = true;

if (esMayor){
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}else{
    console.log("Te falta crecer...");
}

// interface 
interface User{
    name: string;
    lastname: string;
    email: string;
    address?: string;
    password: string;
}

const user = {
    name: "Ivan",
    lastname: "leon",
    email: "leonsanp@gmail.com",
    password: "123123",
    address: "Av mi casa",
}

const user2 = {
    name: "Ivan",
    lastname: "leon",
    email: "leonsanp@gmail.com",
    password: "123123",
}

const users: User[] = [];

function insertUser(user: User) {
users.push(user);
}

function getNameFromUser(user: User): string{
    return `${user.name} ${user.lastname}`;
}

// type 
type Status = "Created" | "on-hold" | "in-progress" | "done";

interface Task{
    title: string;
    date: Date;
    status: Status;
}

const task: Task = {
    title: "Pagar cuentas",
    date: new Date(),
    status: "in-progress",
};