import { loadTodosInProgress, loadTodosSuccess, loadTodosFailure, 
        createTodo, removeTodo, markTodoAsCompleted } from './actions';


export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:9000/todos');
        const todos = await response.json();
    
        dispatch(loadTodosSuccess(todos));
    } catch (e) {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}



export const addTodoRequest = text => async (dispatch) =>{
    try {
        const body = JSON.stringify({text});

        const res = await fetch("http://localhost:9000/todos" , {
            headers :{
                'Content-type' : 'application/json',
            },
            method : 'post',
            body,
        })

        const todo = await res.json();
        dispatch(createTodo(todo))
    } catch (error) {
        dispatch(displayAlert(error))
    }
}


export const removeTodoRequest = id => async (dispatch) =>{
    try {
        const res = await fetch(`http://localhost:9000/todos/${id}` , {
            headers :{
                'Content-type' : 'application/json',
            },
            method : 'delete',
        })

        const removedTodo = await res.json();
        dispatch(removeTodo(removedTodo))
    } catch (error) {
        dispatch(displayAlert(error))
    }
}



export const markTodoAsCompletedRequest = id => async (dispatch) =>{
    try {
        const res = await fetch(`http://localhost:9000/todos/${id}/completed` , {
            headers :{
                'Content-type' : 'application/json',
            },
            method : 'post',
        })

        const updatedTodo = await res.json();
        dispatch(markTodoAsCompleted(updatedTodo))
    } catch (error) {
        dispatch(displayAlert(error))
    }
}


export const displayAlert = text => () => {
    alert(text);
};