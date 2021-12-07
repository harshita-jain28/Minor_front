import { IonCard, IonCardTitle } from "@ionic/react";
import moment from 'moment';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const MonthGraph: React.FC = () => {
  const data = [
    { x: "2021/10/11", y: 'Sadness' },
    { x: "2021/10/22", y: 'Anger' },
    { x: "2021/10/20", y: 'Joy' },
    { x: "2021/11/21", y: 'Love' },
    { x: "2021/11/22", y: 'Fear' },
    { x: "2021/12/23", y: 'Surprise' },

  ];
  const dateFormatter = (date: any) => {
    return moment(date).format('DD MMMM ')
  }
  data.forEach(d => {
    d.x = (moment(d.x).valueOf()).toString();
  });
  return (
    <IonCard className="graph">
      {/* <IonCardTitle className="daily" color="secondary">Monthly Report</IonCardTitle> */}
      <ScatterChart
        width={350}
        height={350}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 10,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" strokeWidth={2} domain={[data[0].x, data[data.length - 1].x]} tickFormatter={dateFormatter} tickCount={1000} />
        <YAxis type="category" dataKey="y" name="weight" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" line shape="cross" />
      </ScatterChart>
    </IonCard>
  )
}

export default MonthGraph;