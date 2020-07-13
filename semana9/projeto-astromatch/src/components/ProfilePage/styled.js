import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90%;
`
export const CardSecundary = styled.div`    

    background-color: #C4C4C4;
    display: flex;
    flex-direction: column;
    height: 390px;
    width: 360px;
    border: 1px solid #C4C4C4;
    border-radius: 3px;
`
export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    width: 380px;    
`
export const CardName = styled.div`
    font-family: Arial;
    font-style: normal;
    font-size: 24px;
    padding: 15px;
`
export const CardBio = styled.div`
    font-family: Arial;
    font-style: normal;
    font-size: 16px;
    padding-right: 15px;
    padding-left: 15px;
`
export const CardPhoto = styled.img`
    height: 360px;
    width: 330px;
    padding: 15px;
`
export const ContainerButton = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
`
