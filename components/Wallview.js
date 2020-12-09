
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Content, Spinner, Input, Form, Container, Item,Left, Right, Button, Text } from 'native-base';
import PostList from './CardList'
import { Actions } from 'react-native-router-flux';


const Wallview = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const url = "http://localhost:8080/restpost"

    // Fetch all posts
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts.reverse());
                console.log(posts)
                setLoading(false)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <Container>
            <Content>
                {isLoading ? (
                    <Spinner />
                ) :
                <Container>
                    <Button block>
                        <Text onPress={ () => Actions.New()}>
                            Add new post
                        </Text>
                    </Button>
                    <PostList posts={posts} type={"post"} />
                </Container>
                }
            </Content>
        </Container>

    )
};



const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Wallview;
