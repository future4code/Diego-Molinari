import React from 'react';
import { Button } from '@material-ui/core';
import { ButtonsContainer, ContentContainer } from './styles';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <div>
      <ContentContainer>
        <PageTitle title={'LabeX'} />
        <ButtonsContainer>
          <Link to={'/login'}>
            <Button variant={'contained'} color={'secondary'}>
              Área do Administrador
            </Button>
          </Link>
          <Link to={'/inscricao'}>
            <Button variant={'contained'} color={'primary'}>
              Quero me Candidatar
            </Button>
          </Link>
        </ButtonsContainer>
      </ContentContainer>
    </div>
  );
};

export default HomePage;
