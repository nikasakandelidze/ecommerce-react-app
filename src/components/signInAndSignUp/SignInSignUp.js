import React from 'react'
import SignIn from "./SignIn/SignIn";
import './SignUpSignIn.scss'
import {connect} from "react-redux";

class SignInSignUp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='group'>
                {this.props.user}
                <SignIn className='member'/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {user : state.user.currentUser}
};


export default connect(mapStateToProps)(SignInSignUp);