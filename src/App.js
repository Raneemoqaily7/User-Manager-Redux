import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import {ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserListing from './components/UserListing';
import Header from './components/Header';
import { Provider } from 'react-redux';
import Store from './redux/Store';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path ="/user" element={<UserListing/>}></Route>
      </Routes>
      </BrowserRouter>
     
     
     <ToastContainer position="bottom-right" closeOnClick
rtl={true}/>
    </div>
    </Provider>
  );
}

export default App;
