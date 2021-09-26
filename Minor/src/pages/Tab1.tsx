import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { CalendarComponent, ChangedEventArgs } from '@syncfusion/ej2-react-calendars'; 

import Entry from '../components/Entry';
const Tab1: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

const display = () =>{
  setIsShow(!isShow)
  console.log("hi")
}
function onchange( args: ChangedEventArgs): void { 
  /*Displays selected date in the label*/ 
  (document.getElementById('date_label') as HTMLElement).textContent = 'Selected Value: ' + args!.value!.toLocaleDateString(); 
} 
  return (
    <IonPage>
      <IonContent >
        <div>
       <CalendarComponent className="cal" dayHeaderFormat="Short" change={onchange}></CalendarComponent>
       <label id='date_label'>Selected Value: </label> 
       {isShow &&
        <Entry setisShow={setIsShow}/>
        }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;