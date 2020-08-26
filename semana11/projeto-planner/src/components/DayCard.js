import React from 'react';
import styled from 'styled-components';

const DayCardStyle = styled.div`
  display: grid;
`;
const Card = styled.div`
  border: 1px solid black;
  padding: 0 8px;
`;

const DayCard = (props) => {
  return (
    <DayCardStyle>
      <Card>
        <h3>{props.day}</h3>
        {props.tasks
          .filter((task) => task.day === props.day)
          .map((task) => {
            return <span>{task.text}</span>;
          })}
      </Card>
    </DayCardStyle>
  );
};
export default DayCard;
