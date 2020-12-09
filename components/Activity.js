import React, { Component } from 'react';
import { Left, Content, H2, Card, CardItem, Body, Text, Thumbnail, Right } from 'native-base';


const Activity = (props) => {
    const randomUri = Math.floor(Math.random() * 50)
    const {start, end, name, aktivitet, body } = props.data;


    return (
        <Card>
            <CardItem>
                <Body>
                    <H2>
                        {name}
                    </H2>
                </Body>
            </CardItem>

            <CardItem>
                <Body>
                    <Text>
                        {body}
                    </Text>
                </Body>
            </CardItem>
            <CardItem footer>
                <Right>
                    <Text>
                        From {start}
                    </Text>
                </Right>
                <Right>
                    <Text>
                    To {end}
                    </Text>
                </Right>
            </CardItem>
        </Card>
    )
}

export default Activity;
