import React, {useState} from "react";
import MenuDrawer from "./MenuDrawer";
import NavigationBar from "./NavigationBar";
import TopBar from "./TopBar";

const Layout:React.FC = ({children}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
    <>
        <TopBar toggleVisibility={toggleVisibility} />
        <MenuDrawer isVisible = {isVisible} toggleVisibility = {toggleVisibility} />
        {children}
    </>
    )

}

/*
const Layout:React.FC = ({children}) => (
    <>
        <TopBar />
        <NavigationBar/>
        {children}
    </>

)
*/
export default Layout;