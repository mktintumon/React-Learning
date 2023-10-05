
import React , {useEffect} from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import { getTodoLoading ,getCompleteTodos , getIncompleteTodos} from '../redux/selectors';
import { loadTodos , removeTodoRequest , markTodoAsCompletedRequest} from '../redux/thunk';


const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ 
    completedTodos , 
    incompletedTodos, 
    onRemovePressed, 
    onCompletedPressed , 
    isLoading , 
    startLoadingTodos  }) => {
    useEffect(()=>{
        startLoadingTodos();
    },[])


    const loadingMessage = <div>Loading todos...</div>
    const content = (
        <ListWrapper>
            <NewTodoForm />

            <h2>Incomplete :</h2>
            {
                incompletedTodos.map(todo =>
                    <TodoListItem key={todo.text} todo={todo}
                        onRemovePressed={onRemovePressed}
                        onCompletedPressed={onCompletedPressed}
                    />
            )}

            <h2>Completed :</h2>
            {
                completedTodos.map(todo =>
                    <TodoListItem key={todo.text} todo={todo}
                        onRemovePressed={onRemovePressed}
                        onCompletedPressed={onCompletedPressed}
                    />
            )}
        </ListWrapper>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
    isLoading : getTodoLoading(state),
    completedTodos : getCompleteTodos(state),
    incompletedTodos : getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos : () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);