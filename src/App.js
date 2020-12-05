import './App.css';
import HomePage from './homepage/HomePage'
import CustomContext from "./CustomContext/CustomContext";

function App() {
  return (
      <CustomContext.Provider value='Ecomerce'>
        <HomePage/>
      </CustomContext.Provider>

  );
}

export default App;
