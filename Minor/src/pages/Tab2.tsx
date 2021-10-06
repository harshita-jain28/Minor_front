import { Dispatch, useState } from 'react';
import {
  IonFab,
  IonCard,
  IonCardTitle,
  IonFabButton,
  IonIcon,
  IonContent,
  IonItem,
  IonPage,
} from '@ionic/react';
import './Tab2.css';
import EntryCard from "../components/EntryCard";
import { addOutline, addCircleOutline } from 'ionicons/icons';

type Props = {
  setEntry: Dispatch<React.SetStateAction<boolean>>;
  entries: Array<{}>;
  selDate: string;
  setWrite: Dispatch<React.SetStateAction<boolean>>;
  disImg: boolean;
};
const Tab2: React.FC<Props> = ({ disImg,setWrite, setEntry, entries, selDate }) => {
  const create = () => {
    setEntry(true);
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard className="addcard" >
          <IonItem  className="cardItem">
            <IonCardTitle className="title" color="secondary" >Add Entry</IonCardTitle>
            <IonIcon icon={addCircleOutline}  color="primary" onClick={() => create()} className="add-btn"></IonIcon>
            {/* <IonFab horizontal="end" >
              <IonFabButton className="btn" size="small" onClick={() => create()}>
                <IonIcon icon={addOutline} ></IonIcon>
              </IonFabButton>
            </IonFab> */}
          </IonItem>
        </IonCard>
        {disImg &&
        <div>
          <img className="disp-img" src="https://i.postimg.cc/0y3wP15K/WELCOME-TO-EMODAR-1.png"></img>
        </div>
        }
        {entries.filter(v => Object.keys(v).length).map((entry: any) => (
          <EntryCard key={entry} title={entry.title} selDate={selDate} divStyle={entry.background} setWrite={setWrite} setEntry={setEntry} />
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
