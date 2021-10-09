import {
    IonContent,
    IonPage,
    IonItem,
    IonIcon,
    IonTitle
} from "@ionic/react";
import React, { Dispatch } from "react";
import { closeOutline } from 'ionicons/icons';

type displayProp = {
    setEntry: Dispatch<React.SetStateAction<boolean>>;
    setWrite: Dispatch<React.SetStateAction<boolean>>;

}
const DisplayEntry: React.FC<displayProp> = ({ setEntry, setWrite }) => {
    const closeTab = () => {
        setWrite(true);
        setEntry(false);
    }
    return (
        <IonPage>
            <IonContent>
                <IonItem lines="none">
                    <IonIcon icon={closeOutline} onClick={() => closeTab()}></IonIcon>
                    <IonTitle className="ion-text-center write">Diary</IonTitle>
                </IonItem>

            </IonContent>
        </IonPage>
    )
}

export default DisplayEntry;