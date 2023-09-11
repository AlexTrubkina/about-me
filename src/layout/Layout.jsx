import React from "react";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const Layout = ({children}) => {
    return (
        <ChakraProvider>
            <Navbar />
            {children}
        </ChakraProvider>
    );
};


export default Layout;