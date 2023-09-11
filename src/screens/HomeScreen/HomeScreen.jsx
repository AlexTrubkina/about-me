import React from "react";
import Layout from "../../layout/Layout";
import {
    CardBody,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
    Card
} from "@chakra-ui/react";
import mySelfie from "../../assets/mySelfie.jpeg";

const HomeScreen = () => {
    return (
        <Layout>
            <Heading>
                Почему программирование стало моим любимым занятием?
            </Heading>

            <Grid
                gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
                columnGap="30x"
                paddingBlock="40px"
                alignItems="center"
            >
                <GridItem >
                    <Card backgroundColor="twitter.300" color="#fff">
                        <CardBody>
                            <Text>
                                В моей семье любовь к программированию мне
                                привил дядя. Еще в школе он давал мне почитать
                                книги про алгоритмы и разные решебники с
                                задачами. Книги по алгоритмам читать было
                                доволно скучно, честно признаться, но зато
                                решать различные задачи и добиваться результата
                                было действительно интересно. Одной из
                                интересных задач было для меня тогда написать
                                калькулятор. Я тогда только начинала увлекаться
                                программированием, и мне казалось, что это
                                действительно сложная задача.
                            </Text>
                            <Text marginTop="30px">
                                Потом я немного забыла свое увлечение
                                программированием, мне почему-то было на тот
                                момент интереснее изучать английский язык. Но к
                                11 классу пришло время выбирать на что поступать
                                и я вспомнила свое любимое занятие.
                            </Text>
                            <Text marginTop="30px">
                                Сейчас я действительно благодарна своему дяде за
                                то, что открыл мне целый мир интересных задач.
                                На данный момент я работаю
                                Frontend-разработчиком, так как мне нравится
                                видеть результат своей работы и создавать
                                красивые анимации.
                            </Text>
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem justifySelf="end">
                    <Image src={mySelfie} display={{base: "none", md: "block"}} borderRadius="20px" width="300px" />
                </GridItem>
            </Grid>
        </Layout>
    );
};

export default HomeScreen;
