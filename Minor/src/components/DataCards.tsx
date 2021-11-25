import { IonCard, IonCol, IonIcon, IonInput, IonItem, IonLabel, IonRow } from "@ionic/react";
import React, { Dispatch } from "react"
import { TextFieldTypes } from "@ionic/core";
import "./style.css"
type Details = {
    inName: string,
    inType: TextFieldTypes,
    ionIcon: string,
    setter: Dispatch<React.SetStateAction<string>>,


}
const DataCards: React.FC<Details> = (props) => {
    return (
        <IonRow>
            <IonCol>
                <IonCard className="cards">
                    <IonItem>
                        <IonIcon icon={props.ionIcon} color="secondary" className="ion-padding"></IonIcon>
                        <div className="labels">
                            <IonLabel className="labels">
                                {props.children}
                            </IonLabel>
                            </div>
                            <IonInput
                            className="inputs"
                            color="secondary"
                                name={props.inName}
                                type={props.inType}
                                onIonChange={(e) => props.setter(e.detail.value!)}
                                >
                            </IonInput>
                        
                    </IonItem>
                </IonCard>
            </IonCol>
        </IonRow>
    )
}

export default DataCards;