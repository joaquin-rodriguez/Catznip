import React from 'react';
import axios from 'axios';
import { Jumbotron, Button, Form, InputGroup } from 'react-bootstrap';
import PersonList from './PersonList';

export default class PersonInput extends React.Component {
    state = {
        name: '',
    };

    numero = 10;
    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        }
        this.numero = this.numero + 1;
        // setter
        var prueba = JSON.parse(localStorage.getItem('data'));
        var x = {
            id: this.numero,
            name: this.state.name
        }
        prueba.push(x);
        console.log(prueba);
        localStorage.setItem('data', JSON.stringify(prueba));

        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };


    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Add a name</h1>
                </Jumbotron>
                <form onSubmit={this.handleSubmit}>
                    Person Name:
                <input type='text' name="name" onChange={this.handleChange} />
                    <button type='submit'>Add</button>
                </form>
            </div >
        );
    }
}