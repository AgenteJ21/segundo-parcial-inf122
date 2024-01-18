import React, { useState } from "react";
import '../styles/ToDoList.css';
import trash from '../icons/trash.svg';
import check from '../icons/check.svg';

export default function ToDoList(){
    const [todoS, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const clickAñadirToDo = () => {
        if(newTodo.trim() !== ""){
            setTodos([...todoS, {text: newTodo.trim(), checked: false}]);
            setNewTodo("");
        }
    }

    const clickEliminarToDo = (index) => {
        const newTodoS = [...todoS];
        newTodoS.splice(index,1);
        setTodos(newTodoS);
    }

    const clickCheckToDo = (index) => {
        const newTodoS = [...todoS];
        newTodoS[index].checked = !newTodoS[index].checked;
        setTodos(newTodoS); 
    }
 
    return (
        <>
         <div>
            <h1>Mis Metas</h1>
            <input type='text' placeholder='Nueva meta...' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button className='btn-add' onClick={clickAñadirToDo}>Agregar</button>
            <div className="subcontainer">
                <div className="check-count">
                    <h2 style={{textDecorationColor: "#117A7A"}} >Completadas: {clickAñadirToDo.c} </h2>
                    <h2 style={{textDecorationColor: "#B2324A"}}>Pendientes: {} </h2>
                </div>
                <div className="new-todo">
                    <ul>
                        {todoS.map((todo, index) => (
                            <li key={index}>
                                <span style={{textDecoration: todo.checked ? "line-through" : "none" }} >{todo.text}</span>
                                <button className='delete' onClick={() => clickEliminarToDo(index)}>
                                    <img src={trash} alt=""></img>
                                </button>
                                <button className="check" onClick={() => clickCheckToDo(index)}>
                                    <img src={check} alt=""></img>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

         </div>
        
        
        </>

    )
}