import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react'
import { getFastestRoute, getLinesForRoute } from '../backend/mock-backend/routeService';
import Routes from './routes';
import { StopSelection } from './stop-selection';

export const RouteSearch = () => {
  const [route, setRoute] = useState([])
  const [routeLines, setRouteLines] = useState([])

  const onRouteSearch = (startStop, endStop) => {
    console.log('searching route ' + startStop + ' -> ' + endStop)
    let fastestRoute = getFastestRoute(startStop, endStop);
    let fastestRouteLines = getLinesForRoute(fastestRoute);
    setRoute(fastestRoute);
    setRouteLines(fastestRouteLines);
  }

  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row centered>
          Start by selecting stops!
        </Grid.Row>
        <Grid.Row centered>
          <StopSelection onSearch={onRouteSearch} />
        </Grid.Row>
      </Grid>
      <Routes route={route} routeLines={routeLines} />
    </div>
  );
};