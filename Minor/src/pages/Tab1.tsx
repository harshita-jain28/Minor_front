import { useState,useEffect, Dispatch } from 'react';
import {
  IonContent,
  IonPage,
  IonTitle,
} from '@ionic/react';
import './Tab1.css';
import { CalendarComponent, ChangedEventArgs } from '@syncfusion/ej2-react-calendars';
import EntryCard from "../components/EntryCard"
type CalProps = {
  setSelDate: Dispatch<React.SetStateAction<string>>;
  entries: Array<{ id: any; date: any, title: any, story: any, background: any }>;
  selDate: string;
  setWrite: Dispatch<React.SetStateAction<boolean>>;
  setEntries: Dispatch<React.SetStateAction<{ id: any; date: any, title: any, story: any, background: any }[]>>,
  setText: Dispatch<React.SetStateAction<string>>,
  setDispTitle: Dispatch<React.SetStateAction<string>>,
  setDispDate: Dispatch<React.SetStateAction<string>>,
  setEntry: Dispatch<React.SetStateAction<boolean>>;
  removeEntry: Function,
  displayEntry: Function,
  username: string,
  setEntries2: Dispatch<React.SetStateAction<{ id: any; date: any, title: any, story: any, background: any }[]>>,
  entries2: Array<{ id: any; date: any, title: any, story: any, background: any }>;
  divstyle: {},
  ids: Array<any>,
  setShow: Dispatch<React.SetStateAction<boolean>>;
  show: boolean,





};
const Tab1: React.FC<CalProps> = ({ setShow, show, ids, setEntries2, divstyle, entries2, username, entries, setSelDate, selDate, setWrite, setEntry, removeEntry, displayEntry }) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  
  const [currDate, setCurrDate] = useState(new Date().toLocaleDateString() + "")
  const display = () => {
    setIsShow(!isShow)
    console.log("hi")
  }
  function onchange(args: ChangedEventArgs): void {
    var tmp = args!.value!.toLocaleDateString();
    var year = args!.value!.getFullYear();
    var month = args!.value!.getMonth() + 1;
    var dte = args!.value!.getDate();
    tmp = year + "-" + month + "-" + dte;
    setCurrDate(tmp);
    if (ids.includes(tmp)) {

      setShow(false);
    }
    else {
      ids.push(tmp)
      setShow(true)
    }

    fetch(process.env.REACT_APP_BACKEND_API_URL + "Get-notes/", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
      body: JSON.stringify({ username: username, year: year, month: month, day: dte }),
    })
      .then((res) => {
        if (res.status == 200) {

          res.json().then((data) => {
            setEntries2([])
            console.log("Log1")
            console.log(data)
            data.map((entry: any) => {
              // if (!(entries2.filter(e => e.id == entry.id).length > 0)) {
                setEntries2(prevItems => [
                  ...prevItems,
                  {
                    "id": entry.id,
                    "date": entry.Date_of_entry,
                    "title": entry.Title,
                    "story": entry.Entry,
                    "background": divstyle,
                  }])

              // }
              // console.log(entries2)
            })
            console.log("Log2")

            console.log(entries2)
          })



        }
      })
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

        {entries2.map((entry: any) => {
            // console.log(entry)

          return (
            <div key={entry.id}>
              <EntryCard entryId={entry.id} title={entry.title} selDate={entry.date} divStyle={entry.background} setWrite={setWrite} setEntry={setEntry} removeEntry={removeEntry} displayEntry={displayEntry} entries={entries} />
            </div>
          )
        })}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
