import {
  IonTitle,
  IonSlides,
  IonSlide,
  IonContent,
  IonHeader,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonToolbar
} from "@ionic/react"
import React, { useState, useRef, Dispatch } from "react"
import Login from "./Login";
import Signup from "./Signup";
import "./Landing.css"
type LandProps = {
  setIsLoggedin: Dispatch<React.SetStateAction<boolean>>;
  setUsername: Dispatch<React.SetStateAction<string>>;
  username: string,
  entries: Array<{id: any;}>,
  setEntries: Dispatch<React.SetStateAction<{ id: any; date: any,title: any,story: any,background: any }[]>>,
  setStyle: Dispatch<React.SetStateAction<{ backgroundImage: string }>>
  imgUrl: string;
  setUrl: Dispatch<React.SetStateAction<string>>;
  divstyle: {},
  setImg: Dispatch<React.SetStateAction<boolean>>;
};

const Landing: React.FC<LandProps> = ({entries,setEntries, setImg,setStyle,imgUrl,setUrl,divstyle, setIsLoggedin, setUsername,username }) => {
  const slider = useRef<HTMLIonSlidesElement>(null);
  const [value, setValue] = useState("0");

  const slideOpts = {
    initialSlide: 0,
    speed: 200,
    loop: false,
    pagination: {
      el: null
    },

  };

  const handleSegmentChange = (e: any) => {
    setValue(e.detail.value);
    slider.current!.slideTo(e.detail.value);
  };
  const handleSlideChange = async (event: any) => {
    let index: number = 0;
    await event.target.getActiveIndex().then((value: any) => (index = value));
    setValue('' + index)
  }
  return (
    <IonPage>
      <IonHeader>
      <img src="https://i.postimg.cc/43wxwXLc/acd6d9.png"></img>
      </IonHeader>
      <IonHeader>
        <IonToolbar>
          <IonSegment value={value} onIonChange={(e) => handleSegmentChange(e)} color="secondary">
            <IonSegmentButton value="0">
              <IonTitle className="titl">Login</IonTitle>
            </IonSegmentButton>
            <IonSegmentButton value="1">
              <IonTitle className="titl">SignUp</IonTitle>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSlides pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
          <IonSlide>
            <Login setIsLoggedin={setIsLoggedin} setName={setUsername} username={username} entries={entries} setEntries={setEntries} setImg={setImg} divstyle={divstyle} setStyle={setStyle} setUrl={setUrl} imgUrl={imgUrl}></Login>
          </IonSlide>
          <IonSlide>
            <Signup setIsLoggedin={setIsLoggedin} setName={setUsername} ></Signup>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}

export default Landing