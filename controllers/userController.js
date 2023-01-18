import {v4 as uuidv4} from "uuid"

let users=[]; // act as a db for temporaray
// for(var i = 0; i<100;i++){
//     users.push(
//         {
//             "name":"Nadeesh Hirushan",
//             "age":24
//         }
//     );
// }

export const getUsers = (req,res) => {
    res.send(users);
}

export const createUser = (req,res) => {
    //console.log('POST ROUTE REACHED');
    const user = {id: uuidv4() , ...req.body }
    users.push(user); // add user to the mongo database
    console.log(user);
    res.send(user);
}

export const getUser = (req,res) => {
    //console.log('GET BY ID ROUTE REACHED');
    const {id} = req.params;
    const foundUser = users.find((user)=> user.id == id);
    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    console.log('DELETE BY ID ROUTE REACHED');
    const {id} = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`${id} is deleted.`);
}

export const updateUser =  (req,res) => {
    console.log('UPDATE BY ID ROUTE REACHED');
    const {id} = req.params;
    const {name , age} = req.body;

    const user = users.find((user => user.id ==  id));

    if(name){
        user.name = name;
    }

    if(age){
        user.age = age;
    }

    res.send(`${id} is updated.`);
}