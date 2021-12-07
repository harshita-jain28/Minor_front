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
  IonText,
  IonButton,
} from '@ionic/react';
import { playCircle, powerOutline } from 'ionicons/icons';

import './Tab3.css';
import Graph from "../components/Graph"
import MonthGraph from '../components/MonthGraph';
type TabProps = {
  username: string;
  setIsLoggedin: Dispatch<React.SetStateAction<boolean>>;
  setMedidate: Dispatch<React.SetStateAction<boolean>>;


};
const Tab3: React.FC<TabProps> = ({setMedidate, username, setIsLoggedin }) => {
  const logout = () =>{
    setIsLoggedin(false);
    localStorage.removeItem("token")
  }
  const medidate_display = () => {
    setMedidate(true)
  }

  const metrics = () =>{
    console.log("hello")
    console.log(username)
    fetch(process.env.REACT_APP_BACKEND_API_URL + "Get-Metrics/", {
      method: "POST",
      headers: {
      "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`, 'Accept': 'application/json'
    },
      body: JSON.stringify({username: username}),
    })
      .then((res) => {
        if (res.status == 200) {
          res.json().then((json) => {
           
            console.log(json);
          
          })
        } else {
          res.json().then((json) => {
            console.log(json);
          })
          console.log("error")
        }
      });

      fetch(process.env.REACT_APP_BACKEND_API_URL + "Get-recommendation/", {
        method: "POST",
        headers: {
        "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}`, 'Accept': 'application/json'
      },
        body: JSON.stringify({username: username}),
      })
        .then((res) => {
          if (res.status == 200) {
            res.json().then((json) => {
             
              console.log(json);
            
            })
          } else {
            res.json().then((json) => {
              console.log(json);
            })
            console.log("error")
          }
        });
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
        <IonTitle className="ion-padding ion-text-center dash" color="secondary" onClick={() => metrics()}>Dashboard</IonTitle>

        <Graph ></Graph>
        <MonthGraph ></MonthGraph>
        <div>
        <IonTitle className="ion-padding ion-text-center dash" color="secondary">Recommendations</IonTitle>

          <IonCard className="recom-card">
            <IonCardTitle className="ion-padding  medi" color="secondary">Medidation 101</IonCardTitle>
            <div className="text-div">
            <IonText className="card-text ion-text-right" color="light">Techniques, Benefits and a Beginner's How To</IonText>
            </div>
            <IonButton className="butt ion-padding" color="secondary" onClick={() => medidate_display()}>Learn more</IonButton>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
