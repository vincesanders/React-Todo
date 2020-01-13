import React from 'react';
import Todo from './Todo';

export default ({ todoList }) => {
    return (
        <ul>
            {/* Map over todoList to dynamically create Todo components */}
            {todoList.map(todoItem => {
                return (
                    <Todo task={todoItem.task} />
                );
            })}
        </ul>
    );
}
