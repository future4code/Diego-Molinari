import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const baseUrl =
  'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diego-molinari';

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  margin: 10px;
  text-align: center;
`;
const Select = styled.select`
  margin: 10px;
  text-align: center;
`;

const Header = (props) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const createTask = () => {
    const body = {
      text: text,
      day: day,
    };
    axios.post(`${baseUrl}`, body).then(() => {
      props.getTasks();
      setText('');
    });
  };

  return (
    <HeaderStyle>
      <h1>planner</h1>
      <Input
        type="text"
        placeholder="Crie uma Tarefa"
        value={text}
        onChange={handleInputChange}
      />
      <Select value={day} onChange={handleDayChange}>
        <option value="">Escolha um dia</option>
        <option data-testid="Domingo" value="Domingo">
          Domingo
        </option>
        <option value="Segunda">Segunda-Feira</option>
        <option value="Terça">Terça-Feira</option>
        <option value="Quarta">Quarta-Feira</option>
        <option value="Quinta">Quinta-Feira</option>
        <option value="Sexta">Sexta-Feira</option>
        <option value="Sábado">Sábado</option>
      </Select>
      <button data-testid={'create-task'} onClick={createTask}>
        Adicione uma Tarefa
      </button>
    </HeaderStyle>
  );
};

export default Header;
