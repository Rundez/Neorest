import React, { Component, useState } from 'react';
import { Button, Content, Text, Container } from 'native-base';
import { ActionConst, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';


const New = (props) => {
    const randomUri = Math.floor(Math.random() * 50)
    const [text, setText] = useState("Push me");

    return (
        <Container style={styles.container}>
            <Text onPress={ () => Actions.pop() }>
                Wanna add shit? this is the page
            </Text>
            <Button >
                <Text style={styles.button} onPress={ () => setText("hey")}>
                    {text}
                </Text>
            </Button>
        </Container>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey'
    },
    button: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    }
})

export default New;
