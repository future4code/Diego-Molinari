import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import axios from 'axios';

axios.get = jest.fn().mockResolvedValue({ data: [] });
axios.post = jest.fn().mockResolvedValue();

describe('renderização inicial', () => {
  test('input existe na tela', () => {
    //preparação
    const { getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText(/create/i);
    //verificação
    expect(input).toBeInTheDocument();
  });

  describe('checa funcionalidades', () => {
    test('checa se o input é limpo e se a tarefa aparece na tela depois do click no botao', () => {
      //preparação
      const { getByPlaceholderText, getByTestId } = render(<App />);
      const input = getByPlaceholderText(/create/i);
      const button = getByTestId(/create/i);
      //execução
      fireEvent.change(input, { target: { value: 'Comprar' } });
      fireEvent.click(button);
      //verificação
      expect(input).toHaveTextContent('');
    });
  });
});
