import './App.css';
import HomePage from './components/homepage/HomePage'
import CustomContext from "./CustomContext/CustomContext";
import {BrowserRouter, Route} from "react-router-dom";
import ShopPage from "./components/shopPage/ShopPage";
import NavigationBar from "./components/navbar/NavigationBar";
import Footer from "./footer/Footer";
import SignInSignUp from "./components/signInAndSignUp/SignInSignUp";
import CartIcon from "./components/cart/CartIcon";
import CartDropDown from "./components/cart/CartDropDown/CartDropDown";
import {connect} from "react-redux";

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar/>
                <CartIcon/>
                { props.isCartDropDownVisible ? <CartDropDown/> : null}
                <CustomContext.Provider value=''>
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
        isCartDropDownVisible: state.cart.visible
    };
};

export default connect(mapStateToProps)(App);