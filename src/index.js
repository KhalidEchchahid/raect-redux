import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { createStore } from "redux"
import allReducer from './reducers';
import { Provider } from 'react-redux';

// provider : connect the store with the intire App


const store = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);










/*
// STORE -- GLOBALIEZED STATE

// ACTION  simple function that return an object
const increment =()=>{
 return {
   type : "INCREMENT" 
 }
}

const decrement =()=>{
 return {
   type : "DECCREMENT" 
 }
}

// REDUCER
const counter =(state = 0 , action)=>{
switch(action.type){
 case 'INCREMENT' : return state + 1 ;
 case 'DECCREMENT' : return state - 1 ;
}

}

let store = createStore(counter);

// display it in the console 
store.subscribe(()=> console.log(store.getState()))

// DISPATCH

store.dispatch(increment());
store.dispatch(decrement());

*/