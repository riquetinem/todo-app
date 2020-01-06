import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default props => (
    <div>
        <h1>
            <PageHeader name='Tarefas' small='Cadastro'/>
            <TodoForm/>
            <TodoList/>
        </h1>
    </div>
)
