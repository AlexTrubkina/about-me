import React from "react";
import Navbar from "../components/Navbar";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
    return (
        <ChakraProvider>
            <Box minH="100vh" backgroundColor="twitter.100">
                <Navbar />
                <Container maxW="90%" paddingBlock="40px">{children}</Container>
            </Box>
        </ChakraProvider>
    );
};

export default Layout;
