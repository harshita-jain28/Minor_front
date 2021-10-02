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
import { addOutline } from 'ionicons/icons';

type Props = {
  setEntry: Dispatch<React.SetStateAction<boolean>>;
  entries: Array<{}>;
  selDate: string;
  setWrite: Dispatch<React.SetStateAction<boolean>>;

};
const Tab2: React.FC<Props> = ({ setWrite, setEntry, entries, selDate }) => {
  const create = () => {
    setEntry(true);
  }


  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard className="addcard" >
          <IonItem lines="none" className="cardItem">
            <IonCardTitle className="title" >Add Entry</IonCardTitle>
            <IonFab horizontal="end" >
              <IonFabButton className="btn" size="small" onClick={() => create()}>
                <IonIcon icon={addOutline} ></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonItem>
        </IonCard>
        {entries.filter(v => Object.keys(v).length).map((entry: any) => (
          <EntryCard key={entry} title={entry.title} selDate={selDate} divStyle={entry.background} setWrite={setWrite} setEntry={setEntry} />
        ))}

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
