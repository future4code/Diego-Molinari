import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, MatchContainer, Photo, Secundary  } from './styled';

const clear = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-molinari-turing/clear').then(response => {
      console.log(response)
      window.alert("Todos os Matches foram apagados")
    })
    .catch(error => {
      console.log(error)
    })
}

function MatchPage() {
    const [matchList, setMatchList] = useState([])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-molinari-turing/matches").then(response => {
            setMatchList(response.data.matches)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getMatches()
    }, [matchList])

    return (
        <div>
            <Container>
                {matchList.map(match => {
                    return (
                        <div>
                            <MatchContainer>
                            <Photo src={match.photo}/>
                            <p>{match.name}</p>
                            </MatchContainer>
                        </div>
                    )
                })}
            </Container>
            <Secundary>
                <button onClick={clear}>Apagar todos os Matchs</button>
            </Secundary>
        </div>
    )
}

export default MatchPage;