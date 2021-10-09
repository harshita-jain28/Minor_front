import {
  IonContent,
  IonPage,
  IonTitle,
} from '@ionic/react';
import './Tab3.css';
import Graph from "../components/Graph"
import MonthGraph from '../components/MonthGraph';
const Tab3: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
        <IonTitle className="ion-padding ion-text-center dash" color="secondary">Dashboard</IonTitle>

        <Graph ></Graph>
        <MonthGraph ></MonthGraph>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
