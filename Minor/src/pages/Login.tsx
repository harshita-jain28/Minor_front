import React,{Dispatch, useState} from "react"
import DataCards from "../components/DataCards"
import { IonButton, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow } from "@ionic/react";
import { personAddOutline, keyOutline, personOutline,mailOutline, homeOutline, phonePortraitOutline, walletOutline, cardOutline } from "ionicons/icons";

type LoginProps = {
    setIsLoggedin: Dispatch<React.SetStateAction<boolean>>;
    setName: Dispatch<React.SetStateAction<string>>;
    username: string
  };

const Login: React.FC<LoginProps> = ({setIsLoggedin,setName,username}) =>{
    // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              localStorage.setItem("token", json.access);
        setName(username)
         setIsLoggedin(true)
         console.log(username)
            }
            );
          
        
    }
    return(
        <IonPage>
        <IonContent>
            <form noValidate onSubmit={login}>
                <IonGrid>
                <DataCards inName={"username"} inType={"text"} ionIcon={personAddOutline} setter={setName}>Username</DataCards>

                <DataCards inName={"password"} inType={"password"} ionIcon={keyOutline} setter={setPassword}>Password</DataCards>         
               <IonButton type="submit" >
                   Submit
               </IonButton>
               </IonGrid>
            </form>
        </IonContent>
    </IonPage>
)
    
}

export default Login