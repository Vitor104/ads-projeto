import {  Route, Routes } from 'react-router-dom';
import styles from '../src/App.css';
import LoginPage from './loginPage/loginPage';
import SignUp from './signUp/signUp';
import Products from './products/products';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


    
    <div className={styles.appContainer}>
      
       
      <Routes>
        <Route exact path='/' element={ <LoginPage />} />
        <Route exact path='Sign Up' element={ <SignUp />} />
        <Route exact path='Products' element={ <Products />} />
      </Routes>
      
    </div>
       
   
    

  );
}

export default App;