import React from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PersonList extends React.Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            console.log(res);
            this.setState({ persons: res.data });
            localStorage.setItem('data', JSON.stringify(res.data));
        });

    }



    render() {
        return <ListGroup className="listboy" >{this.state.persons.map(person => <ListGroup.Item key={person.id}>{person.name}</ListGroup.Item>)}
        </ListGroup>;
    }
}