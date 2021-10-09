import React, { Dispatch } from "react"
import {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonCardHeader,
} from '@ionic/react';
import "./EntryCard.css"
type CardProps = {
    title: string;
    selDate: string;
    divStyle: {};
    setWrite: Dispatch<React.SetStateAction<boolean>>;
    setEntry: Dispatch<React.SetStateAction<boolean>>;

};
const EntryCard: React.FC<CardProps> = ({ setEntry, setWrite, divStyle, title, selDate }) => {
    const readEntry = () => {
        setEntry(true);
        setWrite(false);
    }
    return (
        <IonCard style={divStyle} onClick={readEntry} >
            <IonCardContent className="entrycard">
                <IonCardHeader>
                    <IonCardSubtitle >{selDate} </IonCardSubtitle>
                    <IonCardTitle className="head" >{title}</IonCardTitle>
                </IonCardHeader>
            </IonCardContent>

        </IonCard>

    )
}

export default EntryCard