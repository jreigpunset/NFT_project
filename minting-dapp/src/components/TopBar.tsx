import React from "react";
import styled from 'styled-components';
//import {ColorSet} from '../Colors';



const TopBarWrapper = styled.header`
display:flex;
padding:24px 32px;
align-items:center;
justify-content: space-between;

`;

const MenuButton = styled.button`
`;

const TopBar = () => (
    <TopBarWrapper>
    <MenuButton />
    <div>
        <i className="material-icons">search</i>
        <i className="material-icons">account_circle</i>
    </div>    
    </TopBarWrapper>
)

export default TopBar;