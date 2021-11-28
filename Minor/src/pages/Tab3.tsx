import {
  IonContent,
  IonPage,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonIcon,

IonAvatar,
IonButton,
IonCardSubtitle,
} from '@ionic/react';
import { addCircleOutline, powerOutline } from 'ionicons/icons';

import './Tab3.css';
import Graph from "../components/Graph"
import MonthGraph from '../components/MonthGraph';
type TabProps = {
  username: string;

};
const Tab3: React.FC<TabProps> = ({username}) => {
  return (
    <IonPage>

      <IonContent fullscreen>
      <IonCard className="top-card">
            <IonGrid className="top-grid">
              <IonRow className="top-grid">
                <IonCol>
                  <IonCardHeader>
                    <IonCardSubtitle>Hello</IonCardSubtitle>
                    <IonCardTitle className="userName">{username}</IonCardTitle>
                  </IonCardHeader>
                </IonCol>
                <IonIcon icon={powerOutline} className="ion-padding" size="large"></IonIcon>
                <IonCol className="av-col">
                 
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
        <IonTitle className="ion-padding ion-text-center dash" color="secondary">Dashboard</IonTitle>

        <Graph ></Graph>
        <MonthGraph ></MonthGraph>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
