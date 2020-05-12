import React from 'react';
import './CardCompetencias.css'

function CardCompetencias(props) {
    return (
        <div className="competencias-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.competencia1 }</h4>
                <h4>{ props.competencia2 }</h4>
                <h4>{ props.competencia3 }</h4>
                <h4>{ props.competencia4 }</h4>
                <h4>{ props.competencia5 }</h4>

               
            </div>
        </div>
    )
}

export default CardCompetencias;