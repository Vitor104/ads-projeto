import {  Route, Routes } from 'react-router-dom';
import styles from '../src/App.css';
import LoginPage from './loginPage/loginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (


    
    <div className={styles.appContainer}>
      
       
      <Routes>
        <Route exact path='/' element={ <LoginPage />} />
        
      </Routes>
      
    </div>
       
   
    

  );
}

export default App;