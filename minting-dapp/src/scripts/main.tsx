import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import Home from './react/Home';
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<Home />, document.getElementById('minting-dapp'));
});