import React, { Component, View } from 'react';
import { List } from 'native-base';
import Post from './Post';
import Activity from './Activity'

const PostList = (props) => {
    const posts = props.posts;
    const activities = props.activities;

    console.log("THis is the activities")
    console.log(activities);

    return (
        <List>
            {props.type == "post" ? (
            posts.map((post, index) => {
                return <Post key={index} data={post} />
            }))
            : (
            activities.map((activity, index) => {
                console.log("Got here")
                return <Activity key={index} data={activity} />
            }))
        }
        </List>
    )





}

export default PostList;