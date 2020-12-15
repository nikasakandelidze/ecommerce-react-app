import React from 'react'
import {Component} from "react/cjs/react.production.min";
import FormInput from "../../FormInput/FormInput";
import './SignIn.scss'
import {connect} from "react-redux";
import setCurrentUserAction, {setCurrentUser} from "../../my-redux/user/user-action";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        console.log(this.state.email)
        this.props.changeUser(this.state.email);

        this.setState({email: '', password: ''});
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({email: value});
    }

    render() {
        return (
            <div className='sign-in'>
                <span className='title'>Sign in with your email</span>
                <FormInput handleChange={this.handleInputChange} label='email' type='text'/>
                <FormInput handleChange={this.handleInputChange} label='password'  type='text'/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {changeUser: user => dispatch(setCurrentUserAction(user))};
};


export default connect(null, mapDispatchToProps)(SignIn);