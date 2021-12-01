import {Dispatch} from "react"
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
  IonCardSubtitle,
} from '@ionic/react';
import { logOut, powerOutline } from 'ionicons/icons';

import './Tab3.css';
import Graph from "../components/Graph"
import MonthGraph from '../components/MonthGraph';
type TabProps = {
  username: string;
  setIsLoggedin: Dispatch<React.SetStateAction<boolean>>;


};
const Tab3: React.FC<TabProps> = ({ username, setIsLoggedin }) => {
  const logout = () =>{
    setIsLoggedin(false);
    localStorage.removeItem("token")
  }
  return (
    <IonPage>

      <IonContent fullscreen>
        <IonCard className="top-card">
          <IonGrid className="top-grid">
            <IonRow className="top-grid">
              <IonCol className="top-grid" size="9">
                <IonCardHeader className="head">
                  <IonCardSubtitle>Hello</IonCardSubtitle>
                  <IonCardTitle className="userName" color="secondary">{username}</IonCardTitle>
                </IonCardHeader>
              </IonCol>
              <IonIcon icon={powerOutline} className="ion-padding" size="large" color="primary" onClick={() => logout()}></IonIcon>
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
