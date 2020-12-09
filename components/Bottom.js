import React, { Component, useState } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Bottom = () => {
    const [activeButton, setActive] = useState("wall");


    return (
        <Footer>
            <FooterTab>
                <Button active={activeButton == "wall"} >
                    <Text onPress={ () => { setActive("wall"); Actions.Wallview(); }} >Posts</Text>
                </Button>
                <Button active={activeButton == "activities"} onPress={ () => setActive("activities")}>
                    <Text onPress={ () => { setActive("activities"); Actions.Activities(); }}>Activities</Text>
                </Button>
                <Button active={activeButton == "new"} onPress={ () => setActive("new")}>
                    <Text onPress={ () => { setActive("new"); Actions.New(); }}>New</Text>
                </Button>
                <Button >
                    <Text>Navigate</Text>
                </Button>
            </FooterTab>
        </Footer>
    );

}

export default Bottom;