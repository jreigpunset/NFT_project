import React from 'react';

import { ethers, BigNumber } from 'ethers'
import { ExternalProvider, Web3Provider } from '@ethersproject/providers';
import detectEthereumProvider from '@metamask/detect-provider';
import NftContractType from '../lib/NftContractType';
import CollectionConfig from '../../../../smart-contract/config/CollectionConfig';
import NetworkConfigInterface from '../../../../smart-contract/lib/NetworkConfigInterface';
import CollectionStatus from './CollectionStatus';
import MintWidget from './MintWidget';
import Whitelist from '../lib/Whitelist';



interface State {

  WhitePaperReady: boolean;
}

interface Props {
}

const defaultState: State = {
  WhitePaperReady: false,
};

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private isWhitepaperReady(): boolean {
      return this.state.WhitePaperReady;
  }

  render() {
    return (

    <>
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">
    
    </div>
      {this.isWhitepaperReady() ?
        <div className="not-mainnet">
          Whitepaper is ready to be published
        </div>
        : 
        <div className="not-mainnet">
        Whitepaper is not available yet
        </div>}
        </div>
    </>
    
    
    );
  }


}