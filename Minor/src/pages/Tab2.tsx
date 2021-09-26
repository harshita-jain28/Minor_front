import { Dispatch } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

type Props = {
  setEntry: Dispatch<React.SetStateAction<boolean>>;
  
};
const Tab2: React.FC<Props> = ({setEntry}) => {
  const create = () =>{
    setEntry(true);
  }
  return (
    <IonPage>
      <IonContent fullscreen>
       <IonButton onClick={() => create()}>New Entry</IonButton>
          
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
