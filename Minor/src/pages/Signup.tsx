import {
  IonButton,
  IonContent,
  IonGrid,
  IonPage,
} from "@ionic/react";
import React, { useState, Dispatch } from "react"
import DataCards from "../components/DataCards"
import { personAddOutline, keyOutline, personOutline, mailOutline, } from "ionicons/icons";

type Props = {
  setIsLoggedin: Dispatch<React.SetStateAction<boolean>>;
  setName: Dispatch<React.SetStateAction<string>>;
};
const Signup: React.FC<Props> = ({ setIsLoggedin, setName }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const signup = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log(target);
    const formdata = new FormData(e.target as HTMLFormElement);
    const json: any = {};
    formdata.forEach(function (value, prop) {
      json[prop] = value;
    });
    console.log(json);
    json["username"] = username;
    json["password"] = password;
    json["password2"] = password;

    json["first_name"] = fname;
    json["last_name"] = lname;
    json["email"] = mail;

    console.log(process.env.REACT_APP_BACKEND_API_URL)
    fetch(process.env.REACT_APP_BACKEND_API_URL + "register/", {
      method: "POST",
      headers: { "Content-Type": "application/json", accept: 'application/json' },
      body: JSON.stringify(json),

    })
      .then((userResponse) => {
        if (userResponse.status == 201) {
          console.log("User success");
          setIsLoggedin(true);
          userResponse.json().then((data) => {
            console.log(data);
            setName(data.username)

          })

        } else {
          console.log("error");
          userResponse.json().then((data) => {
            console.log(data);
          })
        }
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  }

  return (
    <IonPage>
      <IonContent>
        <form noValidate onSubmit={signup}>
          <IonGrid>
            <DataCards inName={"fname"} inType={"text"} ionIcon={personOutline} setter={setFname}>First Name</DataCards>
            <DataCards inName={"lname"} inType={"text"} ionIcon={personOutline} setter={setLname}>Last Name</DataCards>
            <DataCards inName={"password"} inType={"password"} ionIcon={keyOutline} setter={setPassword}>Password</DataCards>
            <DataCards inName={"password"} inType={"password"} ionIcon={keyOutline} setter={setPassword}>Confirm Password</DataCards>
            <DataCards inName={"email"} inType={"email"} ionIcon={mailOutline} setter={setMail}>E-mail</DataCards>
            <DataCards inName={"username"} inType={"text"} ionIcon={personAddOutline} setter={setUsername}>Username</DataCards>
            <IonButton type="submit" color="secondary">
              Submit
            </IonButton>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  )
}

export default Signup;