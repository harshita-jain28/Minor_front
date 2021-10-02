import { useState, Dispatch } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { CalendarComponent, ChangedEventArgs } from '@syncfusion/ej2-react-calendars';

type CalProps = {
  setSelDate: Dispatch<React.SetStateAction<string>>;

};
const Tab1: React.FC<CalProps> = ({ setSelDate }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const display = () => {
    setIsShow(!isShow)
    console.log("hi")
  }
  // function onchange( args: ChangedEventArgs): void { 
  //   var tmp = args!.value!.toLocaleDateString();
  //   setSelDate(tmp);
  //   (document.getElementById('date_label') as HTMLElement).textContent = 'Selected Value: ' + args!.value!.toLocaleDateString(); 
  // } 
  return (
    <IonPage>
      <IonContent >
        <div>
          <CalendarComponent className="cal" dayHeaderFormat="Short"></CalendarComponent>
          {/* <label id='date_label'>Selected Value: </label>  */}
          <IonTitle className="ion-padding">Recent Entries</IonTitle>
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
