import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { render, fireEvent, wait } from '@testing-library/react';

//Exercicio 1
test('Quando preenchar o input e clicar em Adicionar, deve aparecer o conteudo na tela', async () => {
  // PREPARAÇÃO
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText(/Novo post/i);
  const addButton = getByText(/adicionar/i);
  //EXECUÇÃO
  fireEvent.change(input, { target: { value: /esse é o novo post/ } });
  fireEvent.click(addButton);
  //VERIFICAÇÃO
  await wait(() => {
    expect(getByText(/esse é o novo post/)).toBeInTheDocument();
  });
});

//Exercicio 2
test('Ao clicar no botão de curtir, apareça o botão descurtir', () => {
  // PREPARAÇÃO
  const { getByText, getByPlaceholderText } = render(<App />);
  const inputPost = getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = getByText(/Adicionar/i);
  //EXECUÇÃO
  fireEvent.change(inputPost, { target: { value: 'teste' } });
  fireEvent.click(buttonAdicionar);
  const buttonCurtir = getByText(/Curtir/i);
  fireEvent.click(buttonCurtir);
  //VERIFICAÇÃO
  const buttonDescurtir = getByText(/Descurtir/i);
  expect(buttonDescurtir).toHaveTextContent(/Descurtir/i);
});

//Exercicio 3
test('Ao clicar em apagar post, o post deve sumir da tela', () => {
  // PREPARAÇÃO
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);
  const inputPost = getByPlaceholderText(/Novo post/i);
  const buttonAdicionar = getByText(/Adicionar/i);
  //EXECUÇÃO
  fireEvent.change(inputPost, { target: { value: 'teste' } });
  fireEvent.click(buttonAdicionar);
  const buttonApagar = getByText(/Apagar/i);
  fireEvent.click(buttonApagar);
  const checkDeletado = queryByText('teste');
  //VERIFICAÇÃO
  expect(checkDeletado).toEqual(null);
});

//Exercicio 4
test('O input deve esvaziar após a adição de um novo post', () => {
  // PREPARAÇÃO
  const { getByPlaceholderText, getByText } = render(<App />);
  const addPostInput = getByPlaceholderText('Novo post');
  //EXECUÇÃO
  fireEvent.change(addPostInput, { target: { value: 'This is a test' } });
  const addPostButton = getByText('Adicionar');
  fireEvent.click(addPostButton);
  //VERIFICAÇÃO
  expect(addPostInput).toHaveTextContent('');
});

//Exercicio 5
test("Quando a lista está vazia no início, deve aparecer a mensagem 'Nenhum post'", () => {
  // PREPARAÇÃO
  const { getByText } = render(<App />);
  //EXECUÇÃO
  const postList = getByText(/Nenhuma Mensagem/i);
  //VERIFICAÇÃO
  expect(postList);
});

//Exercicio 7
test("Se um usuário enviar uma mensagem vazia, deve aparecer a mensagem 'Digite algo para enviar'", () => {
  // PREPARAÇÃO
  const { getByText } = render(<App />);
  const buttonAdicionar = getByText(/Adicionar/i);
  //EXECUÇÃO
  fireEvent.click(buttonAdicionar);
  //VERIFICAÇÃO
  expect(getByText(/Digite algo para enviar/)).toBeInTheDocument();
});
