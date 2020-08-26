import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import DayCard from './components/DayCard';
import Header from './components/Header';

const baseUrl =
  'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-diego-molinari';

const AllPage = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 4px;
  padding: 32px;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = () => {
    axios.get(`${baseUrl}`).then((response) => {
      setTasks(response.data);
    });
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <AllPage>
      <Header getTasks={getTasks} />
      <DayCard day={'Domingo'} tasks={tasks} />
      <DayCard day={'Segunda'} tasks={tasks} />
      <DayCard day={'Terça'} tasks={tasks} />
      <DayCard day={'Quarta'} tasks={tasks} />
      <DayCard day={'Quinta'} tasks={tasks} />
      <DayCard day={'Sexta'} tasks={tasks} />
      <DayCard day={'Sábado'} tasks={tasks} />
    </AllPage>
  );
};

export default App;
