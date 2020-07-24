import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TripInfoIntem from './TripInfoItem';

const TripInfo = (props) => {
  const {name, planet, description, date, durationIndays } = props.info
    return <Card >
    <CardContent>
      <Typography variant={'h5'} gutterBottom>
        Informações da Viagem
      </Typography>
      <TripInfoIntem InfoName={'Nome'} info={name}/>
      <TripInfoIntem InfoName={'Planeta'} info={planet}/>
      <TripInfoIntem InfoName={'Data'} info={date}/>
      <TripInfoIntem InfoName={'Descrição'} info={description}/>
      <TripInfoIntem InfoName={'Duração em Dias'} info={durationIndays}/>
  
    </CardContent>
   
  </Card>
}

export default TripInfo