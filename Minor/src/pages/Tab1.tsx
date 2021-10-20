import { useState, Dispatch } from 'react';
import {
  IonContent,
  IonPage,
  IonTitle,
} from '@ionic/react';
import './Tab1.css';
import { CalendarComponent,ChangedEventArgs } from '@syncfusion/ej2-react-calendars';
import EntryCard from "../components/EntryCard"
type CalProps = {
  setSelDate: Dispatch<React.SetStateAction<string>>;
  entries: Array<{id: any; date: any,title: any,story: any,background: any}>;
  selDate: string;
  setWrite: Dispatch<React.SetStateAction<boolean>>;
  setEntries: Dispatch<React.SetStateAction<{ id: any; date: any,title: any,story: any,background: any }[]>>,
  setText: Dispatch<React.SetStateAction<string>>,
  setDispTitle: Dispatch<React.SetStateAction<string>>,
  setDispDate: Dispatch<React.SetStateAction<string>>,
  setEntry: Dispatch<React.SetStateAction<boolean>>;
  removeEntry: Function,
  displayEntry: Function,

};
const Tab1: React.FC<CalProps> = ({ entries, setSelDate, selDate, setWrite,setEntry,removeEntry, displayEntry }) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [currDate, setCurrDate] = useState(new Date().toLocaleDateString() + "")
  const display = () => {
    setIsShow(!isShow)
    console.log("hi")
  }
  function onchange( args: ChangedEventArgs): void { 
    var tmp = args!.value!.toLocaleDateString();
    setCurrDate(tmp);
  // (document.getElementById('date_label') as HTMLElement).textContent = 'Selected Value: ' + args!.value!.toLocaleDateString(); 
  } 
  return (
    <IonPage>
      <IonContent >
        <div>
          <CalendarComponent className="cal" dayHeaderFormat="Short" change={onchange}></CalendarComponent>
          {/* <label id='date_label'>Selected Value: </label>   */}
          <IonTitle className="ion-padding recent" color="secondary">Recent Entries</IonTitle>

        </div>
        
        {entries.filter((e) => { return e.date == currDate}).map((entry: any) =>{
          console.log(entry)
          return(
            <EntryCard entryId={entry.id} title={entry.title} selDate={selDate} divStyle={entry.background} setWrite={setWrite} setEntry={setEntry} removeEntry={removeEntry} displayEntry={displayEntry}/>
          )
        })}
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
