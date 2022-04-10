import React from "react";
import styled from 'styled-components';
import {ColorSet} from './ColorSet';
//import Logo from '../images/logo.png';


const TopBarWrapper = styled.header`
display:flex;
padding:24px 32px;
align-items:center;
justify-content: space-between;
background-color:${ColorSet.MAIN_VIOLET};

i {
    cursor:pointer;
    font-size: 2em;
    color:white;

    &:hover {
        color:${ColorSet.LIGHT_VIOLET}
    }
}

`;

const MenuButton = styled.button`
background-color:transparent;
width:3rem;
height:3rem;
outline:none;
cursor: pointer;
border:none;
`;

const MenuToggle  = styled.span`
display:block;
width:2rem;
height: 2px;
background-color:white;
border-radius:3px;
background-color: ${ColorSet.MAIN_PINK};
position: relative;
margin: auto;

&::after, &::before{
    background-color:inherit;
    height:inherit;
    width:inherit;
    border-radius: inherit;
    content:"";
    position:absolute;
    top:10 px;
    right:0;
    left:0;
    bottom:10px;
    margin: auto;
}

&::after {
    top: 1.25rem;

}
&::before {
    top: -1.3rem;
}
`;

interface Props{
    toggleVisibility(): boolean;
}

const TopBar : React.FC<Props> = ({toggleVisibility}) => (
    <TopBarWrapper>
    <MenuButton onClick={toggleVisibility}>
        <MenuToggle />
    </MenuButton>
    
    <div>
        <i className="material-icons">search</i>
        <i className="material-icons">account_circle</i>
    </div>    
    </TopBarWrapper>
)

export default TopBar;