import React, { Dispatch } from "react"
import {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonItem
} from '@ionic/react';
import "./EntryCard.css"
import { addCircleOutline, trashOutline,createOutline} from 'ionicons/icons';

type CardProps = {
    title: string;
    selDate: string;
    divStyle: {};
    setWrite: Dispatch<React.SetStateAction<boolean>>;
    setEntry: Dispatch<React.SetStateAction<boolean>>;
    removeEntry: Function,
    entryId: number,
    displayEntry: Function,

};
const EntryCard: React.FC<CardProps> = ({displayEntry, removeEntry,entryId,setEntry, setWrite, divStyle, title, selDate }) => {
    const readEntry = () => {
        setEntry(true);
        setWrite(false);
        displayEntry(entryId);
    }
    return (
        <IonItemSliding className="card entryId">
        <IonItem lines="none" className="item_card" style={divStyle} >
        <IonCard style={divStyle} onClick={()=>displayEntry(entryId)} className="entrycard">
            <IonCardContent className="entrycard">
                <IonCardHeader>
                    <IonCardSubtitle >{selDate} </IonCardSubtitle>
                    <IonCardTitle className="head" >{title}</IonCardTitle>
                </IonCardHeader>
            </IonCardContent>

        </IonCard>
        </IonItem>
        <IonItemOptions side="start">
                <IonItemOption  color="secondary" expandable>
                  <IonIcon icon={createOutline} className="icons"></IonIcon>
                 
                </IonItemOption>
                
                
                </IonItemOptions>
                <IonItemOptions side="end">
               
                <IonItemOption color="medium" expandable>
                  <IonIcon icon={trashOutline} className="icons" onClick={()=>removeEntry(entryId)}></IonIcon>
                    
                </IonItemOption>
                </IonItemOptions>
        </IonItemSliding>

    )
}

export default EntryCard