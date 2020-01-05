import React, {Component} from 'react';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {

    constructor(props) {
        super();
        this.state = {description: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        console.log(this.state.description)
    }

    handleChange(e) {
        this.setState(
            {
                ...this.state,
                description: e.target.value
            })
    }

    render() {
        return (
            <div>
                <h1>
                    <PageHeader name='Tarefas' small='Cadastro'/>
                    <TodoForm description={this.state.description} handleChange={this.handleChange} handleAdd={this.handleAdd}/>
                    <TodoList/>
                </h1>
            </div>
        )
    }
}