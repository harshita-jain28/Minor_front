import { Dispatch } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
type UserProps = {
    setisShow: Dispatch<React.SetStateAction<boolean>>;
  };
const Entry: React.FC<UserProps> = (setisShow) => {
   
  return (
    <IonTitle>
        hello
    </IonTitle>
    
  );
};

export default Entry;
