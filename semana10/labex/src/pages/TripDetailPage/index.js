import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import TripInfoCard from './TripInfoCard';
import CandidatesList from './CandidatesList';
import { ContentContainer } from './styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TripDetailPage = () => {
  const [trip, setTrip] = useState();
  const params = useParams();

  const getTripDetail = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-molinari-turing/trip/${params.tripId}`,
        {
          headers: {
            auth: window.localStorage.getItem('token'),
          },
        },
      )
      .then((response) => {
        setTrip(response.data.trip);
      });
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  const decideCandidate = (approve, candidateId) => {
    const body = {
      approve: approve,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-molinari-turing/trips/${params.tripId}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: window.localStorage.getItem('token'),
          },
        },
      )
      .then(() => {
        getTripDetail();
      });
  };

  return (
    <div>
      <PageTitle title={'Detalhes da Viagem'} />
      {trip ? (
        <ContentContainer>
          <TripInfoCard info={trip} />
          <CandidatesList
            candidates={trip.candidates}
            decideCandidate={decideCandidate}
          />
        </ContentContainer>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};

export default TripDetailPage;
