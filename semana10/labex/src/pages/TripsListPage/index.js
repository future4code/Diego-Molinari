import React from 'react';
import PageTitle from '../../components/PageTitle';
import { Button, List, ListItem, ListItemText,} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { TripsListPageContainer } from './styles';
import useTripsList from '../../hooks/useTripsList';

const TripListPage = () => {
    const trips = useTripsList()
    return <TripsListPageContainer>
        <PageTitle title={'Lista de Viagens'}/>
        <Link to={'/viagens/criar'}>
            <Button variant={'contained'} color={'primary'}>Criar Viagem</Button>
        </Link>
        <List component="nav">
            {trips.map((trip) => {
                return <Link to={`/viagens/detalhe/${trip.id}`}>
                <ListItem button>
                    <ListItemText primary={trip.name} />
                </ListItem>
            </Link>
            })}

        </List>
    </TripsListPageContainer> 
}

export default TripListPage