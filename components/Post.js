import React, { Component, StyleSheet } from 'react';
import { Left, Content, H2, Card, CardItem, Body, Text, Thumbnail, Right } from 'native-base';


const Post = (props) => {
    const randomUri = Math.floor(Math.random() * 50)

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: 'https://randomuser.me/api/portraits/men/' + randomUri + '.jpg' }} />
                    <Body>
                        <H2>
                            {props.data.firstName + " " +props.data.lastName}
                        </H2>
                    </Body>
                </Left>
            </CardItem>
            
            <CardItem>
                <Body>
                    <H2 style={{marginBottom: 10}}>{props.data.title}</H2>
                    <Text>
                        {props.data.body}
                    </Text>
                </Body>
            </CardItem>
            <CardItem footer>
                <Right>
                    <Text subtle>{props.data.created.slice(0, -7)} </Text>
                </Right>
            </CardItem>
        </Card>
    )
}

export default Post;
