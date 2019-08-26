import React, {Component} from 'react';
import { Container, Form, Input, SubmitButton } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Main extends Component {

  state = {
    newUser: '',
    users: [],
  };

 render() {
  const { users,newUser} = this.state;

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
          value={newUser}
          onChangeText={text => this.setState({ newUser: text })}
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#fff"/>
        </SubmitButton>
      </Form>
    </Container>
  );
 }
}

Main.navigationOptions = {
  title: 'Usuários',
};
