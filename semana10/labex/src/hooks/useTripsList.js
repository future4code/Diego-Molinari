import { useState, useEffect } from "react"
import axios from "axios"

export const useTripsList = () => {
    const [trips, setTrips] = useState([])
    
    
        useEffect(() => {
            axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-molinari-turing/trips').then((response) =>{
              setTrips(response.data.trips)  
            })
        }, [])
        return trips
}

export default useTripsList