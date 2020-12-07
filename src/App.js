import './App.css';
import HomePage from './homepage/HomePage'
import CustomContext from "./CustomContext/CustomContext";
import {BrowserRouter, Route} from "react-router-dom";
import ShopPage from "./shopPage/ShopPage";
import NavigationBar from "./navbar/NavigationBar";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar/>
                <CustomContext.Provider value=''>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shoppage' component={ShopPage}/>
                </CustomContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
