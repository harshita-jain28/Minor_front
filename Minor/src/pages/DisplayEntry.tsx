import {
    IonContent,
    IonPage,
    IonItem,
    IonIcon,
    IonTitle,
    IonText
} from "@ionic/react";
import React, { Dispatch } from "react";
import { closeOutline } from 'ionicons/icons';
import "./DisplayEntry.css"
type displayProp = {
    setEntry: Dispatch<React.SetStateAction<boolean>>;
    setWrite: Dispatch<React.SetStateAction<boolean>>;
    dispDate: string,
    dispText: string,
    dispTitle: string,
}
const DisplayEntry: React.FC<displayProp> = ({dispText, dispDate, dispTitle, setEntry, setWrite }) => {
    const closeTab = () => {
        setWrite(true);
        setEntry(false);
    }
    return (
        <IonPage>
            <IonContent>
                <IonItem lines="none" className="header">
                    <IonIcon icon={closeOutline} onClick={() => closeTab()}></IonIcon>
                    <IonTitle className="ion-text-center write">Diary</IonTitle>
                </IonItem>
                <IonText className="ion-padding dates" color="secondary">Date: {dispDate} </IonText>
                <div className="head">
                <IonText className="ion-padding txts">{dispTitle}</IonText>
                </div>
        <img src="https://i.postimg.cc/KvcJkFfS/Untitled-design-3.png"></img>
        <div className="ion-padding">
                <IonText className="diaEntry">{dispText}</IonText>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default DisplayEntry;