import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const CampoNovoPost = styled.input`
  width: 300px;
  margin: 5px 0;
`
const Botao = styled.button`
  width: 150px;
  height: 20px;
  margin-top: 15px;
  margin-bottom: 30px;
  
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: 'Diego',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'Molinari',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=4'
      },
      {
        nomeUsuario: 'Tijucas',
        fotoUsuario: 'https://picsum.photos/50/50?a=5',
        fotoPost: 'https://picsum.photos/200/150?a=6'
      }
    ],

    valorInputPessoa: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: ''
  }

  adicionaPessoa = () => {
    const novaPessoa = {
      nomeUsuario: this.state.valorInputPessoa,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }
    const novoPessoa = [novaPessoa, ...this.state.pessoas]
    this.setState({
      pessoas: novoPessoa,
      valorInputPessoa: '',
      valorInputFotoUsuario: '',
      valorInputFotoPost: ''
    })
  }

  onChangeInputPessoa = event => {
    this.setState({ valorInputPessoa: event.target.value })
  }

  onChangeInputFotoUsuario = event => {
    this.setState({ valorInputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = event => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  render() {

    const listaDePosts = this.state.pessoas.map((pessoa, index) => {
      return (
        <Post key={index}
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      )
    })

    return (

      <div className={'app-container'}>
        <h1>Instagram Labenu</h1>
        <h3>Adicione um novo post</h3>
        <CampoNovoPost
          value={this.state.valorInputPessoa}
          onChange={this.onChangeInputPessoa}
          placeholder={'Digite seu nome de usuário'}
        />
        <CampoNovoPost
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={'Coloque o link do picsum.photos/200/150?a=5'}
        />
        <CampoNovoPost
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={'Coloque o link do picsum.photos/200/150?a=5'}
        />
        <Botao onClick={this.adicionaPessoa}>Postar</Botao>
        <div>{listaDePosts}</div>
      </div>
    );
  }
}

export default App;