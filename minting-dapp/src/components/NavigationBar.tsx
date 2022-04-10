import React from 'react';
import {Link} from 'react-navi';
import styled from 'styled-components';
import UrlRouter from '../utils/UrlRouter';
import { ColorSet } from './ColorSet';

const NAVIGATION_BAR_WIDTH ="70%";

const NavigationWrapper = styled.nav`
display:flex;
width:${NAVIGATION_BAR_WIDTH};
margin:24px auto 16px;
justify-content:space-between;
`

const Separator = styled.hr`
heigth: 7px;
width:${NAVIGATION_BAR_WIDTH};
border-radius:14px;
margin:0 auto;
background-color:${ColorSet.LIGHT_VIOLET};
`

const NavigationBar = () => (
    <>
    <NavigationWrapper>
        <Link exact activeClassName="active-link" className="link" href = {UrlRouter.HOME}>Your ideas</Link>
        <Link activeClassName="active-link" className="link" href = {UrlRouter.ADD_IDEA}>Add idea</Link>
        <Link activeClassName="active-link" className="link" href = {UrlRouter.MY_ACCOUNT}>My Account</Link>
    </NavigationWrapper>
    </>
)

export default NavigationBar;