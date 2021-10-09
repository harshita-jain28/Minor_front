import { Dispatch } from 'react';
import {
    IonButton,
    IonContent,
    IonTextarea,
    IonInput,
    IonPage,
    IonText,
    IonTitle,
    IonFooter,
} from '@ionic/react';
import './NewEntry.css';
type EntryProps = {
    setEntry: Dispatch<React.SetStateAction<boolean>>;
    selDate: string;
    diary: string;
    title: string;
    setDiary: Dispatch<React.SetStateAction<string>>
    setTitle: Dispatch<React.SetStateAction<string>>
    setEntries: Dispatch<React.SetStateAction<{}[]>>
    setStyle: Dispatch<React.SetStateAction<{ backgroundImage: string }>>
    imgUrl: string;
    setUrl: Dispatch<React.SetStateAction<string>>;
    divstyle: {},
    setImg: Dispatch<React.SetStateAction<boolean>>;

};
const NewEntry: React.FC<EntryProps> = ({ divstyle, setUrl, imgUrl, setStyle, setEntry, selDate, setTitle, title, setDiary, diary, setEntries, setImg }) => {
    var items = ['https://i.postimg.cc/HnXn9z7y/Untitled-design-2.png', 'https://i.postimg.cc/zvk4bJm6/bg3.png', 'https://i.postimg.cc/hjZSJb9V/bg4.png']
    const cancelentry = () => {
        setEntry(false)

    }
    const newentry = () => {
        var rand = items[Math.floor(Math.random() * items.length)]
        console.log(rand);
        setUrl(rand);
        setStyle({ "backgroundImage": 'url(' + imgUrl + ')' })

        setEntries(prevItems => [
            ...prevItems,
            {
                "id": 1,
                "date": selDate,
                "title": title,
                "story": diary,
                "background": divstyle,
            }])
        setImg(false);
        setEntry(false)
    }
    return (
        <IonPage>
            <IonContent >
                <IonTitle className="ion-padding ion-text-center write">Write</IonTitle>
                <IonText className="ion-padding date" color="secondary">Date: {selDate} </IonText>
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
                    <IonTextarea className="entry" autoGrow={true} placeholder="Write entry" onIonChange={e => setDiary(e.detail.value!)} required></IonTextarea>
                </form>

            </IonContent>
            <IonFooter className="footer ion-no-border" >
                <IonButton shape="round" type="submit" className="foot-btn" onClick={() => cancelentry()} >Cancel</IonButton>

                <IonButton shape="round" type="submit" color="secondary" onClick={() => newentry()} >Create</IonButton>
            </IonFooter>
        </IonPage>

    );
};

export default NewEntry;
