import React from 'react';
import styled from 'styled-components';


const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const Buttons = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
`

const CompletedButton = styled(Buttons)`
    display: inline-block;
    background-color: #22ee22;
`;


const RemoveButton = styled(Buttons)`
    display: inline-block;
    background-color: red;
    margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <TodoItemContainer>
        <h3>{todo.text}</h3>
        <p><i>Created : {(new Date(todo.createdAt)).toLocaleDateString()}</i></p>
        <ButtonsContainer>
            {
                todo.isCompleted ?
                    <CompletedButton
                        style={{ backgroundColor: "floralwhite" }}>DONE
                    </CompletedButton>
                    :
                    <CompletedButton
                        onClick={() => onCompletedPressed(todo.id)}
                        className="completed-button">
                        Mark As Completed
                    </CompletedButton>
            }

            <RemoveButton
                onClick={() => onRemovePressed(todo.id)}
                className="remove-button">Remove
            </RemoveButton>
        </ButtonsContainer>
    </TodoItemContainer>
);

export default TodoListItem;