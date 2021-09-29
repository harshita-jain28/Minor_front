import { useState, Dispatch } from 'react';
import { IonButton, IonContent, IonTextarea, IonInput, IonItem, IonHeader, IonLabel, IonPage, IonText, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import './NewEntry.css';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import Entry from '../components/Entry';
import { backspace } from 'ionicons/icons';
type EntryProps = {
    setEntry: Dispatch<React.SetStateAction<boolean>>;
    selDate: string;
    diary: string;
    title: string;
    setDiary: Dispatch<React.SetStateAction<string>>
    setTitle: Dispatch<React.SetStateAction<string>>


};
const NewEntry: React.FC<EntryProps> = ({ setEntry, selDate, setTitle, title, setDiary, diary }) => {
    const newentry = () => {
        setEntry(false)
    }
    return (
        <IonPage>
            <IonContent >
                <IonTitle className="ion-padding ion-text-center write">Write</IonTitle>
                <IonText className="ion-padding date">Date: {selDate} </IonText>
                <form className="ion-padding">
                    <IonText className="ion-padding txt">Title</IonText>
                    <IonInput
                    className="ion-padding inp"
                        placeholder="Add a title to the entry"
                        name="title"
                        type="text"
                        spellCheck={false}
                        autocapitalize="off"
                        onIonChange={(e) => setTitle(e.detail.value!)}
                        required
                    ></IonInput>
                        <IonText className="ion-padding txt">Entry</IonText>
                        <IonTextarea className="entry" autoGrow={true} placeholder="Write entry"  onIonChange={e => setDiary(e.detail.value!)}></IonTextarea>
                </form>

            </IonContent>
            <IonFooter className="footer ion-no-border" >
                <IonButton shape="round" onClick={() => newentry()}>Create</IonButton>
            </IonFooter>
        </IonPage>

    );
};

export default NewEntry;
