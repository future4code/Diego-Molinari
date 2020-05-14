import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardCompetencias from './components/CardCompotencias/CardCompetencias';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/i34PCu9.jpg" 
          nome="Diego Molinari" 
          descricao="Olá, meu nome é Diego Molinari, sou aluno do curso de web full stack na Labenu. sou natura de Tijucas/SC"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={"https://www.traum.com.br/wp-content/uploads/2018/06/email-icon-121-400x400.png"}
          altImagem={"email icon"}
          descricao={"Email: "}
          informacao={"diego.tj.molinari@gmail.com"}
        />

        <CardPequeno 
          imagem={"https://image.flaticon.com/icons/svg/1239/1239525.svg"} 
          altImagem={"endereco icon"}
          descricao={"Endereço: "} 
          informacao={"Rua Geral Oliveira"} 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/F9vQktj.jpg" 
          nome="Engenheiro de Pesca" 
          descricao="Sou Engenheiro de Pesca, formado pela Universidade do Estado de Santa Catarina, atuei como responsável técnico em fazendas de camarões marinhos em sitema BFT por um período de 4 anos" 
        />
        
        <CardGrande 
          imagem="https://i.imgur.com/Cp24twj.jpg" 
          nome="Fundador do Portal Aquaculture Basil" 
          descricao="Sou o criador do portal Aquaculture Brasil, um site especializado em conteúdo sobre aquicultura " 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas Competências</h2>
        <CardCompetencias 
        imagem="https://i.imgur.com/nt9ScSH.jpg"
        competencia1="Negociação"
        competencia2="Trabalho em equipe"
        competencia3="Proatividade"
        competencia4="Visão estratégica"
        competencia5="Inovação"        
        />
        


      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />           

        <ImagemButton 
          imagem="https://i.imgur.com/FsWDcxa.png" 
          texto="Instagram" 
        />           
      </div>
    </div>
  );
}

export default App;
