import { Dispatch } from 'react';
import {
  IonCard,
  IonCardTitle,
  IonIcon,
  IonContent,
  IonItem,
  IonPage,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,

} from '@ionic/react';
import './Tab2.css';
import EntryCard from "../components/EntryCard";
import { addCircleOutline } from 'ionicons/icons';

type Props = {
  setEntry: Dispatch<React.SetStateAction<boolean>>;
  entries: Array<{id: any;}>;
  selDate: string;
  setWrite: Dispatch<React.SetStateAction<boolean>>;
  disImg: boolean;
  setEntries: Dispatch<React.SetStateAction<{ id: any; date: any,title: any,story: any,background: any }[]>>,
  setText: Dispatch<React.SetStateAction<string>>,
  setDispTitle: Dispatch<React.SetStateAction<string>>,
  setDispDate: Dispatch<React.SetStateAction<string>>


};
const Tab2: React.FC<Props> = ({ setDispDate, setDispTitle, setText, disImg, setWrite, setEntry, entries, selDate, setEntries}) => {
  const create = () => {
    setEntry(true);
  }
  const displayEntry = (diaId: number) =>{
    
    const selectEntry: any = entries.filter((entry)=>{
      return entry.id == diaId;
    });
    selectEntry.map((entry: any) => {
      setDispDate(entry.date)
      setText(entry.story)
      setDispTitle(entry.title)
    })
    setEntry(true);
    setWrite(false);

    
  }
  const removeEntry = (diaId: number) => {
    console.log(diaId)
    const newSelectedEntry: any = entries.filter((entry) => {

      return entry.id !== diaId;
    });
    console.log(newSelectedEntry);
    setEntries(newSelectedEntry);

  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard className="addcard" >
          <IonItem className="cardItem">
            <IonCardTitle className="title" color="secondary" >Add Entry</IonCardTitle>
            <IonIcon icon={addCircleOutline} color="primary" onClick={() => create()} className="add-btn"></IonIcon>
          </IonItem>
        </IonCard>
        {disImg &&
          <div>
            <img className="disp-img" src="https://i.postimg.cc/0y3wP15K/WELCOME-TO-EMODAR-1.png"></img>
          </div>
        }
        {entries.filter(v => Object.keys(v).length).map((entry: any) => {
          //  console.log(entries)
           return(
           <EntryCard entryId={entry.id} title={entry.title} selDate={selDate} divStyle={entry.background} setWrite={setWrite} setEntry={setEntry} removeEntry={removeEntry} displayEntry={displayEntry}/>
           )
         
})}

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
