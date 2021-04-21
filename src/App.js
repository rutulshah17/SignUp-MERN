import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: ''
        };
    }

    changeFullName = event => {
        this.setState({ fullName: event.target.value });
    }

    changeUserName = event => {
        this.setState({ userName: event.target.value });
    }

    changeEmail = event => {
        this.setState({ email: event.target.value });
    }

    changePassword = event => {
        this.setState({ password: event.target.value });
    }

    handleOnSubmit = event => {
        event.preventDefault();

        const registeredUser = {
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:4000/client/signup', registeredUser)
        .then( response => console.log(response.data) )
        .catch( error => console.log(error) );

        this.setState({
            fullName: '',
            userName: '',
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.handleOnSubmit}>
                            <input type='text' 
                            placeholder='Full Name' 
                            onChange={this.changeFullName} 
                            defaultValue={this.state.fullName}
                            className='form-control form-group'
                            />

                            <input type='text' 
                            placeholder='Username' 
                            onChange={this.changeUserName} 
                            defaultValue={this.state.userName}
                            className='form-control form-group'
                            />

                            <input type='email' 
                            placeholder='E-mail' 
                            onChange={this.changeEmail} 
                            defaultValue={this.state.email}
                            className='form-control form-group'
                            />

                            <input type='password' 
                            placeholder='Password' 
                            onChange={this.changePassword} 
                            defaultValue={this.state.password}
                            className='form-control form-group'
                            />

                            <input type='submit'
                            className='btn btn-primary btn-block'
                            value='Submit'
                            />

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;