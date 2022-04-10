import react from 'react';
import { ColorSet } from './ColorSet';
import styled from 'styled-components';

interface isVisibleDiv {
    isVisible: boolean;
}

const MenuDrawerWrapper = styled.div<isVisibleDiv>
`
width:250px;
height:100%;
position: fixed;
top: 0;
background-color: white;
z-index: 12;
transform:translateX(${Props => Props.isVisible ? 0: '-100%'});
transition: transform 0.3 ease-out;
`;

const MenuDrawerOverlay= styled.div<isVisibleDiv>
`
position:fixed;
width:100vw;
top:0;
heigth:100%;
background-color: black;
opacity: 0.3;
z-index:11;
opacity: ${Props => Props.isVisible ? 0.3 : 0};
transition: opacity 0.3 ease-out;
`;

const MenuIcon  =styled.i`
color: ${ColorSet.MAIN_PINK};
border: 3px solid ${ColorSet.LIGH_PINK};
border-radius:50%;
margin-left: 8px;
`;

const MenuList = styled.ul`
padding:0;
list-style:none;

li:last-child{
    border-bottom:2px solid ${ColorSet.LIGH_PINK};
}
`;

const MenuTab = styled.div`
display:flex;
justify-content:flex-end;
margin: 10% 16px;
align-items:center;
cursor: pointer;
`;

const MenuLabel = styled.div`
text-transform:uppercase;
font-size:20px;
font-weight:bold;
color: ${ColorSet.LIGH_PINK};
cursor: pointer;
`;

const MenuEntry = styled.li`
font-size:20px;
color: ${ColorSet.LIGH_PINK};
cursor:pointer
border-top: 2px solid ${ColorSet.LIGH_PINK};
padding: 15% 10%;

&::hover {
    color: ${ColorSet.MAIN_VIOLET};

}
`;

const LogoutTab = styled(MenuTab)``

interface Props {
    isVisible: boolean;
    toggleVisibility: () => void;

}

const menuLabels = ["Home", "Your collection", "Explore", "Profile settings", "Statistics"];

const MenuDrawer : React.FC<Props> = ({isVisible, toggleVisibility}) => (
    <>
        <MenuDrawerWrapper isVisible ={isVisible}>

        </MenuDrawerWrapper>
        <MenuDrawerOverlay onClick = {toggleVisibility} isVisible={isVisible} />
    </>
)

/*
const MenuDrawer : React.FC<Props> = ({isVisible, toggleVisibility}) => (
    <>
        <MenuDrawerWrapper isVisible ={isVisible}>
            <MenuTab onClick = {toggleVisibility}>
                <MenuLabel>Close</MenuLabel>
                <MenuIcon className="material-icons">close</MenuIcon>
            </MenuTab>
            <MenuList>
                {menuLabels.map(label => <MenuEntry key = {label}>{label}</MenuEntry>)}
            </MenuList>
        
            <LogoutTab>
                <MenuLabel>Logout</MenuLabel>
                <MenuIcon className='material-icons'>exit_to_app</MenuIcon>
            </LogoutTab>
        </MenuDrawerWrapper>
        <MenuDrawerOverlay onClick = {toggleVisibility} isVisible={isVisible} />
    </>
)*/


export default MenuDrawer;