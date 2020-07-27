import React from 'react'

import Button from '@material-ui/core/Button';
import PeopleAlt from "@material-ui/icons/PeopleAlt";

import { ContainerHeader, Title } from './styled';


function Header(props) {
    return (
        <ContainerHeader>
            {props.CurrentPage === 'profile' ? <div></div> : <Button  onClick={props.OnClickChangePage}><PeopleAlt/></Button>}
            <Title>
                <h1>Astro Match</h1>
            </Title>
            {props.CurrentPage === 'profile' ? <Button size="large" onClick={props.OnClickChangePage} ><PeopleAlt/></Button> : <div></div>}

            
        </ContainerHeader>
    )
}

export default Header