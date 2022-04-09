import React from 'react';
import {Link} from 'react-navi';
import styled from 'styled-components';
import UrlRouter from '../utils/UrlRouter';

const NavigationWrapper = styled.nav`
display:flex;
width:70%;
margin:24px auto 16px;
justify-content:space-between;
`

const NavigationBar = () => (
    <NavigationWrapper>
        <Link href = {UrlRouter.HOME}>your ideas</Link>
        <Link href = {UrlRouter.ADD_IDEA}>add</Link>
        <Link href = {UrlRouter.MY_ACCOUNT}>account</Link>
    </NavigationWrapper>
)

export default NavigationBar;