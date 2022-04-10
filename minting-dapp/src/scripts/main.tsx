//import '../styles/main.scss';
import {mount, route } from 'navi';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-navi';
import Dapp from './react/Dapp';
import Home from './react/Home';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';
import AddIdeaPage from '../pages/AddIdea'
import LoginPage from '../Auth/LoginPage';
import RegisterPage from '../Auth/RegisterPage';
import { withAuthentication } from '../Auth/AuthenticatedRoute';
import { NFT_PRO_IT_TOKEN_KEY } from '../Auth/Auth.api';

/*
const GlobalStyles = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
}
`;*/

const routes = mount ({
  "/": route({
    title :'Home',
    view : <Home/>
  }),
  "/login": route({
    title :'Login',
    view : <LoginPage/>
  }),
  "/register": route({
    title :'Register',
    view : <RegisterPage/>
  }),
  "/mint": route({
    title :'Mint',
    view : <Dapp/>
  }),
  "/ideas": withAuthentication(route({
    title :'Ideas',
    view : <AddIdeaPage/>
  })),
  "/layout": route({
    title :'test Page with layout',
    view : <AddIdeaPage/>
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
  ReactDOM.render(<Router routes={routes} context = {{token:localStorage.getItem(NFT_PRO_IT_TOKEN_KEY)}}/>, document.getElementById('root'));
});

/*
document.addEventListener('DOMContentLoaded', async () => {
ReactDOM.render(<LoginPage/>, document.getElementById('root'));
});*/

//ServiceWorker.unregister();
