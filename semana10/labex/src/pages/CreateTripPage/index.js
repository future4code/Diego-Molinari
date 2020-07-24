import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import { FormContainer } from '../../components/FormContainer';
import useForm from '../../hooks/useForm';




const CreateTripPage = () => {
    const [form, onChangeInput] = useForm({
      name: '',
      planet: '',
      description: '',
      duration: ''

    })

      const [date, setDate] = useState(new Date())

    
    return <div>
     
         <PageTitle title={'Criar Viagem'}/>
         <FormContainer>
             <TextField label={'Nome'}/> 
             <TextField label={'Planeta'}/>
            
             <TextField label={'Descrição'}/>
             <TextField label={'Duração em Dias'} type={'number'}/>
             

             <Button variant={'contained'} color={'primary'} type={'submit'} >Entrar</Button>
         </FormContainer>
        
    </div>
}

export default CreateTripPage