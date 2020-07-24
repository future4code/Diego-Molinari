import React, { useEffect, useState } from 'react';
import { FormContainer } from '../../components/FormContainer';
import { TextField, Button, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import axios from 'axios';
import { useForm } from '../../hooks/useForm';

const ApplicationPage = () => {
const [trips, setTrips] = useState([])
const [form, onChangeInput] = useForm({
    name: '',
    age: 0,
    applicationText: '',
    profession: '',
    country: '',
    trip: null
})

    useEffect(() => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-molinari-turing/trips').then((response) =>{
          setTrips(response.data.trips)  
        })
    }, [])

const onSubmitApplication = (event) => {
    event.preventDefault()
    const body = {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
    }

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-molinari-turing/trips/${form.trip.id}/apply`, body)
}

    return <div>
        <PageTitle title={'Aplicar para Viagem'}/>
         <FormContainer onSubmit={onSubmitApplication}>
            <TextField
             label={'Nome do candidato'}
                onChange={onChangeInput}
                value={form['name']}
                name={'name'} 
             /> 
            <TextField
             label={'Idade'} type={'number'}
                onChange={onChangeInput}
                value={form['age']}
                name={'age'} 
             />
            <TextField
             label={'Texto de Aplicação'} helperText="Explique porque você é um bom candidato"
                onChange={onChangeInput}
                value={form['applicationText']}
                name={'applicationText'}
            />
            <TextField
             label={'Profissão'} 
                onChange={onChangeInput}
                value={form['profession']}
                name={'profession'}
            />
            <FormControl>
            <InputLabel id="selec-paises">Paises</InputLabel>
        <Select
            labelId="selec-paises"
            onChange={onChangeInput}
            value={form['country']}
            name={'country'}
        >
          <MenuItem value={'brasil'}>Brasil</MenuItem>
          <MenuItem value={'argentina'}>Argentina</MenuItem>
          <MenuItem value={'eua'}>EUA</MenuItem>
        </Select>
        </FormControl>
        <FormControl>
                <InputLabel id="selec-viagens">Viagens</InputLabel>
        <Select
          labelId="selec-viagens"
          onChange={onChangeInput}
            value={form['trip']}
            name={'trip'}
        >
            {trips.map((trip) => {
                return <MenuItem value={trip}>{trip.name}</MenuItem>
            })}
        </Select>
        </FormControl>
                <Button variant={'contained'} color={'primary'} type={'submit'} >Inscrever-se</Button>
         </FormContainer>
    </div>
}

export default ApplicationPage