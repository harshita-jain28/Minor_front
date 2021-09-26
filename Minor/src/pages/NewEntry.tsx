import { useState, Dispatch } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './NewEntry.css';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import Entry from '../components/Entry';
import { backspace } from 'ionicons/icons';
type EntryProps = {
    setEntry: Dispatch<React.SetStateAction<boolean>>;
    
  };
const NewEntry: React.FC<EntryProps> = ({setEntry}) => {
const newentry = () =>{
   setEntry(false)
}
  return (
      <IonPage>
      <IonContent >
          <IonTitle className="ion-padding ion-text-center write">Write</IonTitle>
      <IonButton onClick={() => newentry()}>Create</IonButton>
      </IonContent>
      </IonPage>
    
  );
};

export default NewEntry;
