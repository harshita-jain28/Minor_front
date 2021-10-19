import React from "react"
// @ts-ignore
import DonutChart from 'react-donut-chart'
import {
  IonCard,
  IonCardTitle
} from '@ionic/react';
import "./Graph.css"
export const primaryColor = '#8921e0';
export const secondaryColor = '#00f2ff';
const contrastColor = '#ffffff';

const Graph: React.FC = () => {

  return (

    <IonCard className="graph">
      <IonCardTitle className="daily" color="secondary">Monthly Report</IonCardTitle>
      <DonutChart width="400" height="300" className="donutchart" clickToggle={false}
        colors={['#C9CC3F', '#D2042D', '#0398DB', '#FFBF00', '#C41E3A', '#3949A3']}
        data={[{
          label: 'Joy',
          value: 35,
          className: 'joy-data'
        },
        {
          label: 'Anger',
          value: 1,
        },
        {
          label: 'Fear',
          value: 8,
        },
        {
          label: 'Suprise',
          value: 2,
        },
        {
          label: 'Love',
          value: 45,
        },
        {
          label: 'Sadness',
          value: 9,
        }

        ]} />
    </IonCard>

  );
}

export default Graph;