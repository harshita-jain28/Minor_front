import React, { Dispatch, useState } from "react"
import DataCards from "../components/DataCards"
import {
  IonButton,
  IonContent,
  IonGrid,
  IonPage,
} from "@ionic/react";
import { personAddOutline, keyOutline, } from "ionicons/icons";

type LoginProps = {
  setIsLoggedin: Dispatch<React.SetStateAction<boolean>>;
  setName: Dispatch<React.SetStateAction<string>>;
  username: string,
  entries: Array<{ id: any; }>,
  setEntries: Dispatch<React.SetStateAction<{ id: any; date: any, title: any, story: any, background: any }[]>>,
  setStyle: Dispatch<React.SetStateAction<{ backgroundImage: string }>>
  imgUrl: string;
  setUrl: Dispatch<React.SetStateAction<string>>;
  divstyle: {},
  setImg: Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<LoginProps> = ({ setImg, imgUrl, setUrl, setStyle, divstyle, setEntries, entries, setIsLoggedin, setName, username }) => {
  const [msg,setmsg] = useState("")

  var items = ['https://i.postimg.cc/HnXn9z7y/Untitled-design-2.png', 'https://i.postimg.cc/zvk4bJm6/bg3.png', 'https://i.postimg.cc/hjZSJb9V/bg4.png']
  const [password, setPassword] = useState("");
  const [tok,setTok] = useState("")
  const login = async (e: React.FormEvent) => {
    e.preventDefault();

    const data: any = {
      username,
      password,
    };
    fetch(process.env.REACT_APP_BACKEND_API_URL + "token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status == 200) {
          res.json().then((json) => {
            setTok(json.access);
            console.log(json);
            localStorage.setItem("token", json.access);
            setName(username)
            setIsLoggedin(true)
          
            console.log(username)
          })
        } else {
          res.json().then((json) => {
            console.log(json);
          })
          console.log("error")
        }
      });

   

    // fetch(process.env.REACT_APP_BACKEND_API_URL + "Get-All-notes/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok}` },
    //   body: JSON.stringify({ username: username }),
    // })
    //   .then((res) => {
    //     if (res.status == 200) {
    //       console.log("added");
    //       res.json().then((data) => {
    //         var rand = items[Math.floor(Math.random() * items.length)]

    //         setUrl(rand);
        
    //         setStyle({ "backgroundImage": 'url(' + imgUrl + ')' })
    //         console.log(data)
    
    //         data.map((entry: any) => {
    //          console.log(entry.Date_of_entry);
    //           setEntries(prevItems => [

    //             ...prevItems,
    //             {
    //               "id": entry.id,
    //               "date": entry.Date_of_entry,
    //               "title": entry.Title,
    //               "story": entry.Entry,
    //               "background": divstyle,
    //             }])
    //             setImg(false);

    //         })


    //       })
    //       }else{
    //         console.log("error")
    //     }
    //   })

  }
  return (
    <IonPage>
      <IonContent>
        <form noValidate onSubmit={login}>
          <IonGrid>
            <DataCards inName={"username"} inType={"text"} ionIcon={personAddOutline} setter={setName}>Username</DataCards>
            <DataCards inName={"password"} inType={"password"} ionIcon={keyOutline} setter={setPassword}>Password</DataCards>
            <IonButton type="submit" color="secondary">
              Login
            </IonButton>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  )

}

export default Login