import React from 'react';
import { Header, Container, Left, Button, Icon, Body, Title, Right } from 'native-base';

const Top = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon type="MaterialIcons" name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Neo Club</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon type="MaterialIcons" name='menu' />
        </Button>
      </Right>
    </Header>
  )
}


export default Top;