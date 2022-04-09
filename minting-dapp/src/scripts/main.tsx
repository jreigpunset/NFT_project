//import '../styles/main.scss';
import {mount, route } from 'navi';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-navi';

//registerpage
//serviceWorker
import Dapp from './react/Dapp';
import Home from './react/Home';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import AddIdeaPage from '../pages/AddIdea'
import LoginPage from '../Auth/LoginPage';
import RegisterPage from '../Auth/RegisterPage';

/*
const GlobalStyles = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
}
`;*/

const routes = mount ({
 /*"/": route({
   title :'Ideas',
   //view : <IdeasPage/>
  }),*/
  /*"/add": route({
  title :'add',
  view : <AddIdeaPage/>
  }),*/
  /*"/me": WithAuthentication(route({
    title :'My Account'
  })),*/
  "/": route({
    title :'Login',
    view : <LoginPage/>
  }),
  "/register": route({
    title :'Ideas',
    view : <RegisterPage/>
  })
})
/*
if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}*/
/*
//this works
document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<Home/>, document.getElementById('minting-dapp'));
});*/

/*
//This works
document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<LoginPage/>, document.getElementById('root'));
});*/



document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<Router routes={routes}/>, document.getElementById('root'));
});

/*
document.addEventListener('DOMContentLoaded', async () => {
ReactDOM.render(<LoginPage/>, document.getElementById('root'));
});*/

//ServiceWorker.unregister();
