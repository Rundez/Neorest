
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Spinner, Body } from 'native-base';
import PostList from './CardList'


const Activities = (props) => {
    const [activities, setActivities] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const url = "http://localhost:8080/restactivities"

    // Fetch all posts
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((activities) => {
                setActivities(activities.reverse());
                console.log(activities)
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);


    return (
        <Content>
        {isLoading ? (
            <Body>
                <Spinner />
            </Body>
        ) :
            <PostList activities={activities} type={"activities"} />
        }
    </Content>
)
};



const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Activities;
