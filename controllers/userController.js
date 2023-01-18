import {v4 as uuidv4} from "uuid";
import {ConnectDB,db} from "../DB/DBConnection.js";

ConnectDB();
const collection = db.collection('Users');


export const getUsers = async (req,res) => {

    const users = await collection.find({}).toArray();
    res.send(users);
}

export const createUser = async (req,res) => {
    //console.log('POST ROUTE REACHED');
    const user = {id: uuidv4() , ...req.body }
    const insertResult = await collection.insertOne(user);
    console.log(user);
    res.send(insertResult);
}

export const getUser = async (req,res) => {
    //console.log('GET BY ID ROUTE REACHED');
    const {id} = req.params;
    const foundUser = await collection.findOne({ id: id });
    res.send(foundUser);
}

export const deleteUser = async (req,res) => {
    //console.log('DELETE BY ID ROUTE REACHED');
    const {id} = req.params;
    const deleteResult = await collection.deleteOne({ id: id });
    res.send(deleteResult);
}

export const updateUser =  async (req,res) => {
    //console.log('UPDATE BY ID ROUTE REACHED');
    const {id} = req.params;
    const {name , age} = req.body;

    const user = await collection.findOne({ id: id });

    if(name){
        user.name = name;
    }

    if(age){
        user.age = age;
    }

    const updateResult = await collection.updateOne(
        { id: id }, 
        { $set: { name: user.name,age: user.age  } }
        );
    res.send(updateResult);
}