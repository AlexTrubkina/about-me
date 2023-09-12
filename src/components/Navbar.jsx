"use client";

import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, LinkIcon } from "@chakra-ui/icons";
import mySelfie from "../assets/mySelfie.jpeg";

import { NavLink } from "react-router-dom";

import { Links } from "../datasets/datasets";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg="twitter.200" px={4}>
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {Links.map((link) => (
                                <NavLink key={link.page} to={link.link}>
                                    <Box
                                        px={2}
                                        py={1}
                                        rounded={"md"}
                                        _hover={{
                                            textDecoration: "none",
                                            bg: useColorModeValue(
                                                "gray.200",
                                                "gray.700"
                                            ),
                                        }}
                                    >
                                        {link.page}
                                    </Box>
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"} gap="30px">
                        <NavLink to="/">
                            <Button
                                as={Button}
                                rounded={"full"}
                                variant={"link"}
                                cursor={"pointer"}
                                minW={0}
                            >
                                <Avatar size={"sm"} src={mySelfie} />
                            </Button>
                        </NavLink>
                        <Button
                            as={"a"}
                            rightIcon={<LinkIcon/>}
                            colorScheme="teal"
                            variant="outline"
                            href="https://github.com/AlexTrubkina/about-me"
                        >
                            GitHub
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.page} to={link.link}>
                                    <Box
                                        px={2}
                                        py={1}
                                        rounded={"md"}
                                        _hover={{
                                            textDecoration: "none",
                                            bg: useColorModeValue(
                                                "gray.200",
                                                "gray.700"
                                            ),
                                        }}
                                    >
                                        {link.page}
                                    </Box>
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
