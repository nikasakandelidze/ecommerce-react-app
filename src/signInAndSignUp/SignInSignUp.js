import React from 'react'
import SignIn from "./SignIn/SignIn";
import './SignUpSignIn.scss'

class SignInSignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='group'>
                <SignIn className='member'/>
                <SignIn className='member'/>
            </div>
        );
    }
}

export default SignInSignUp;