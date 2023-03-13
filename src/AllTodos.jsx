import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import db from "./firebase";
import { async } from "@firebase/util";

const AllTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        await getDocs(collection(db, "todos")).then((response) => {
            console.log(response.docs[0].data());
            const newData = response.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,  
            }));
            setTodos(newData)
            console.log(todos, newData)
        });
    };
     
    return (
        <div>
            {todos?.map((todo, i) => (
                <p key={i}>{todo.todo}</p>
            ))}
        </div>
    );
}
    
export default AllTodos;    
        