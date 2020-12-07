import React from 'react'
import {Component} from "react/cjs/react.production.min";
import FormInput from "../../FormInput/FormInput";
import './SignIn.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <span className='title'>Sign in with your email</span>
                <form className='input-form' onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleInputChange} label='email' required type='email'/>
                    <FormInput handleChange={this.handleInputChange} label='password' required type='password'/>
                    <input className='submit' type='submit' value='Submit'/>
                </form>
            </div>
        );
    }

}

export default SignIn;