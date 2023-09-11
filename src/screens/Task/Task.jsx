import React from "react";
import Layout from "../../layout/Layout";
import { Heading, Text, Card, CardBody, Flex } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const Task = () => {
    return (
        <Layout>
            <Heading textAlign="center">Задача</Heading>
            <Flex alignItems="center" gap="30px" justifyContent="center" paddingInline="20px">
                <Card
                    marginBlock="30px"
                    backgroundColor="twitter.300"
                    color="#fff"
                    maxW={{ base: "100%", md: "60%" }}
                >
                    <CardBody>
                        <Text marginBottom="10px">
                            Напишите функцию, которая принимает массив с
                            произвольным количеством элементов, элементы могут
                            разных типов данных. Функция должна вернуть массив,
                            в котором удалены все повторяющися элементы и
                            остались только униальные. Если передан пустой
                            массив или не массив, то функция возвращает 0.
                        </Text>
                        <Text>Пример выполнения:</Text>
                        <Text>
                            makeUniqueArray([1, 2, 3, "6", "6", 0, 0]) - [1, 2,
                            3, "6", 0]
                        </Text>
                    </CardBody>
                </Card>
                <CheckIcon boxSize={100} color="#fff"/>
            </Flex>
        </Layout>
    );
}

export default Task;
