import React, {Component} from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

    constructor(props) {
        super();
        this.state = {description: '', list: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.refresh()
    }

    refresh(description = '') {
        const search = description ? `&description__regex=${description}` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp =>
                this.setState({...this.state, description, list: resp.data})
            )
            .catch(error => console.log("moio"))
    }

    handleClear() {
        this.refresh();
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleAdd() {
        const description = this.state.description;
        axios.post(URL, {description})
            .then(resp => this.refresh())
            .catch(error => console.log("Nao rolo fazer o cadastro"))
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
            .catch(error => console.log("Nao rolo de exclui a tarefa"))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {
            ...todo,
            done: true
        }).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {
            ...todo,
            done: false
        }).then(resp => this.refresh(this.state.description))
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

                    <TodoForm
                        description={this.state.description}
                        handleChange={this.handleChange}
                        handleSearch={this.handleSearch}
                        handleClear={this.handleClear}
                        handleAdd={this.handleAdd}/>

                    <TodoList
                        list={this.state.list}
                        handleMarkAsPending={this.handleMarkAsPending}
                        handleMarkAsDone={this.handleMarkAsDone}
                        handleRemove={this.handleRemove}/>
                </h1>
            </div>
        )
    }
}