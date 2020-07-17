import React from 'react'
import axios from 'axios'

import {CardContainer, CardSecundary, CardText, CardName, CardBio, CardPhoto, ContainerButton} from './styled';

import Button from '@material-ui/core/Button';

import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";


const ProfilePage = (props) => {
    
    const onClickLike = () => {
        const body = {
            "id": profile.id,
            "choice": true
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-molinari-turing/choose-person", body).then(response => {
            if (response.data.isMatch === true) {
                window.alert("Deu match!")
            }
            props.GetProfile()
        })
        .catch(error => {
            console.log(error)
        })
    }

    const onClickDislike = () => {
        const body = {
            "id": profile.id,
            "choice": false 
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-molinari-turing/choose-person", body).then(response => {
            props.GetProfile()
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const profile = props.Profile

    return (
        <CardContainer>
            <CardSecundary>
            
            <CardPhoto src={profile.photo}/> 
            </CardSecundary>
            <CardText>
                <CardName>{profile.name}, {profile.age}</CardName>
                <CardBio>{profile.bio}</CardBio>
            </CardText>
            

            <ContainerButton>
                <Button variant="fab" size="large" onClick={onClickDislike} color="secondary">
                    <CloseIcon/>
                </Button>
                <Button variant="fab" size="large" onClick={onClickLike} color="primary">
                    <FavoriteIcon/>
                </Button>
                
            </ContainerButton>
        </CardContainer>
    )
}

export default ProfilePage