import './App.css';
import HomePage from './homepage/HomePage'
import CustomContext from "./CustomContext/CustomContext";
import {BrowserRouter, Route} from "react-router-dom";
import ShopPage from "./shopPage/ShopPage";
import NavigationBar from "./navbar/NavigationBar";
import Footer from "./footer/Footer";
import SignInSignUp from "./signInAndSignUp/SignInSignUp";
import CartIcon from "./cart/CartIcon";
import CartDropDown from "./cart/CartDropDown/CartDropDown";
import {connect} from "react-redux";

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar/>
                <CustomContext.Provider value=''>
                    <CartIcon/>
                    { props.isCartDropDownVisible ? <CartDropDown/> : null}
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shoppage' component={ShopPage}/>
                    <Route path='/sign' component={SignInSignUp}/>
                </CustomContext.Provider>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}
const mapStateToProps = state =>{
    return {
        isCartDropDownVisible: state.cartVisible.visible
    };
};

export default connect(mapStateToProps)(App);