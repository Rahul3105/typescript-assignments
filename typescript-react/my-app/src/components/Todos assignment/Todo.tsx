import { TodoInput } from "./TodoInput"
import {TodoItem } from "./TodoItem"
import { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import styled from 'styled-components';

export interface TodosType {
    title: string,
    id: number,
    status: boolean
}
export const Todo = () => {
    const [todos, setTodos] = useState<TodosType[]>([{title:'rahul', status: true, id: 1}]);
    const [open, setOpen] = useState(false);
    const [currUpdate, setCurrUpdate] = useState<number>();
    const handleSubmit = (inputVal: string): void => {
        let payload: TodosType =  {
            title: inputVal,
            status: false,
            id: todos.length + 1    
        }
        setTodos([...todos, payload]);
    }
    const handleToggle = (id : number) :void => {
        let payload = todos.map((item) => {
            if (item.id === id) {
             item.status = !item.status
            }
            return item
        })
        setTodos(payload);
    }
    const handleDelete = (id: number) :void => {
        let payload = todos.filter(item => item.id !== id)
        setTodos(payload);
    }
    const handleUpdate = (inputVal : string ): void => {
        let payload = todos.map(item => {
            if (item.id === currUpdate) {
                item.title = inputVal;
            }
            return item;
        })
        setTodos(payload);
        setOpen(false)
    }
    const handleModal = (id : number) => {
        setCurrUpdate(id);
        setOpen(true);
    }
    return <>
        <TodoInput label={'Add Todos'} onClick={handleSubmit}/>
        <div>
            { todos.map(item => <TodoItem title={item.title} status={item.status}  id={item.id} onToggle={ () => handleToggle(item.id) } onDelete={() => handleDelete(item.id) } handleModal={()=>handleModal(item.id)}></TodoItem>) }
        </div>
        <StyledModal open={open} onClose ={() => setOpen(false)}>
            <div className='paper'>
                <TodoInput label={'Add Todos'} onClick={handleUpdate}/>
            </div>
        </StyledModal>
    </>
}

const StyledModal = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    & > .paper {
        background-color:whitesmoke;
        width:200px;
        margin: auto;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items:center;
        border-radius: 5px;
    }
`;