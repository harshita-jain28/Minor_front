import { useEffect,Dispatch } from 'react';
import {
  IonCard,
  IonCardTitle,
  IonIcon,
  IonContent,
  IonItem,
  IonPage,

} from '@ionic/react';
import './Tab2.css';
import EntryCard from "../components/EntryCard";
import { addCircleOutline } from 'ionicons/icons';

type Props = {
  setEntry: Dispatch<React.SetStateAction<boolean>>;
  entries: Array<{ id: any; date: any, title: any, story: any, background: any }>;
  selDate: string;
  setWrite: Dispatch<React.SetStateAction<boolean>>;
  disImg: boolean;
  setEntries: Dispatch<React.SetStateAction<{ id: any; date: any, title: any, story: any, background: any }[]>>,
  setText: Dispatch<React.SetStateAction<string>>,
  setDispTitle: Dispatch<React.SetStateAction<string>>,
  setDispDate: Dispatch<React.SetStateAction<string>>
  username: string;
  setUrl: Dispatch<React.SetStateAction<string>>;
  divstyle: {},
  setImg: Dispatch<React.SetStateAction<boolean>>;
  setStyle: Dispatch<React.SetStateAction<{ backgroundImage: string }>>
  imgUrl: string;
};
const Tab2: React.FC<Props> = ({imgUrl,setStyle, setUrl,divstyle,setImg,username, setDispDate, setDispTitle, setText, disImg, setWrite, setEntry, entries, selDate, setEntries }) => {
  var items = ['https://i.postimg.cc/HnXn9z7y/Untitled-design-2.png', 'https://i.postimg.cc/zvk4bJm6/bg3.png', 'https://i.postimg.cc/hjZSJb9V/bg4.png']
  let todayDate = new Date();
  let year = todayDate.getFullYear();
  let mon = todayDate.getMonth() +1;
  let date = todayDate.getDate();
    let today = year + "-" + mon + "-" + date;
  useEffect(() =>{
    if (disImg){
      fetch(process.env.REACT_APP_BACKEND_API_URL + "Get-notes/", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: JSON.stringify({ username: username, year: year, month: mon, day: date }),
      })
        .then((res) => {
          if (res.status == 200) {
            console.log("added");
            res.json().then((data) => {
              console.log(data)
              setEntries([]);
              var rand = items[Math.floor(Math.random() * items.length)]
  
              setUrl(rand);
          
              setStyle({ "backgroundImage": 'url(' + imgUrl + ')' })
              console.log(data)
      
              data.map((entry: any) => {
               console.log(entry.Date_of_entry);
                setEntries(prevItems => [
                  ...prevItems,
                  
                  {
                    "id": entry.id,
                    "date": entry.Date_of_entry,
                    "title": entry.Title,
                    "story": entry.Entry,
                    "background": divstyle,
                  }])
                  setImg(false);
  
              })
  
  
            })
            }else{
              console.log("error")
          }
        })
    }
  }, [])

  const create = () => {
    setEntry(true);
  }
  const displayEntry = (diaId: number) => {

    const selectEntry: any = entries.filter((entry) => {
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
          <IonItem className="cardItem" lines="none">
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

export default Tab2;
