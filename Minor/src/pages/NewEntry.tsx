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
    setEntries: Dispatch<React.SetStateAction<{ id: any; date: any,title: any,story: any,background: any }[]>>
    setStyle: Dispatch<React.SetStateAction<{ backgroundImage: string }>>
    imgUrl: string;
    setUrl: Dispatch<React.SetStateAction<string>>;
    divstyle: {},
    setImg: Dispatch<React.SetStateAction<boolean>>;
    diaId: number;
    setId: Dispatch<React.SetStateAction<number>>
    entries: Array<{id: any;}>
    username:string,

};
const NewEntry: React.FC<EntryProps> = ({username,entries, divstyle, setUrl, imgUrl, setStyle, setEntry, selDate, setTitle, title, setDiary, diary, setEntries, setImg,diaId,setId }) => {
    var items = ['https://i.postimg.cc/HnXn9z7y/Untitled-design-2.png', 'https://i.postimg.cc/zvk4bJm6/bg3.png', 'https://i.postimg.cc/hjZSJb9V/bg4.png']
    const cancelentry = () => {
        setEntry(false)

    }
    const newentry = () => {
        let newId = diaId;
        setId(newId+1);
        
        // setTimeout(()=>console.log(diaId),10000)
        var rand = items[Math.floor(Math.random() * items.length)]
       
        setUrl(rand);
        setStyle({ "backgroundImage": 'url(' + imgUrl + ')' })
        // console.log(entries)
        setEntries(prevItems => [
            ...prevItems,
            {
                "id": diaId,
                "date": selDate,
                "title": title,
                "story": diary,
                "background": divstyle,
            }])
        setImg(false);
        setEntry(false)
        console.log(username)
        console.log(diary)

        fetch(process.env.REACT_APP_BACKEND_API_URL + "Add-notes/" , {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
            body: JSON.stringify({ username: username ,entry: diary, title: title }),
        }).then((res) => {
            
            if(res.status == 200){
                console.log("added");
                res.json().then((data) =>{
                         console.log(data)
                     })

            }else {
                console.log("error");
                console.log(localStorage.getItem("token"))
                console.log(username)
                console.log(diary)
                

                // res.json().then((data) => {
                //   // TODO: Display the errors on screen
                //   console.log(data);
                // });
            }
        })
        .catch((error) => {
            // console.log("error");
            console.log(error);
            console.log(localStorage.getItem("token"))
          });

          console.log(username)

        
        
    }
    return (
        <IonPage>
            <IonContent >
                <IonTitle className="ion-padding ion-text-center write">Write</IonTitle>
                <IonText className="ion-padding date" color="secondary">Date: {selDate} </IonText>
                <form className="ion-padding" onSubmit={newentry}>
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

                <IonButton shape="round" type="submit" color="secondary"  onClick={newentry}>Create</IonButton>
            </IonFooter>
            
        </IonPage>

    );
};

export default NewEntry;
