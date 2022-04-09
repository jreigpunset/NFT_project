import React from "react";
import TopBar from "./TopBar";

const Layout:React.FC = ({children}) => (
    <>
        <TopBar />
        {children}
    </>

)

export default Layout;