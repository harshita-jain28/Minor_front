import { IonContent, IonGrid, IonIcon, IonPage, IonRow, IonTitle } from "@ionic/react";
import React, {Dispatch} from "react";
import { returnUpBack, powerOutline } from 'ionicons/icons';
import"./NewEntry.css"
import MediCard from "../components/MediCard";

type MediProps = {
    setMedidate: Dispatch<React.SetStateAction<boolean>>;
  };
const Medidate: React.FC<MediProps> = ({setMedidate}) =>{
    const close = () =>{
        setMedidate(false)
    }
    return(
            <IonPage className="medi-page">
                <IonContent className="medi-page">
                    <IonIcon icon={returnUpBack} onClick={() => close() } size="large" color="secondary" className="back-btn"></IonIcon>
                    <IonTitle color="secondary" className="ion-padding medi-head">Medidation 101</IonTitle>
                    <IonGrid>
                        <IonRow>
                            <MediCard topic={"What are the benefits?"} img={"https://i.postimg.cc/59hmXStt/pic1.jpg"} para={"Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health.And these benefits don't end when your meditation session ends. Meditation can help carry you more calmly through your day and may help you manage symptoms of certain medical conditions."}></MediCard>
                        </IonRow>
                        <IonRow>
                            <MediCard topic={"How to begin ?"} img={"https://i.postimg.cc/VsZkgKtY/pic3.jpg"} para={"1) Take a seat: Find place to sit that feels calm and quiet to you."
                             + "\n" + " 2) Set a time limit: If you’re just beginning, it can help to choose a short time, such as five or 10 minutes.\n3) Notice your body: You can sit in a chair with your feet on the floor, you can sit loosely cross-legged, you can kneel—all are fine. Just make sure you are stable and in a position you can stay in for a while.\n 4) Feel your breath: Follow the sensation of your breath as it goes in and as it goes out.\n5) Notice when your mind has wandered : Inevitably, your attention will leave the breath and wander to other places. When you get around to noticing that your mind has wandered—in a few seconds, a minute, five minutes—simply return your attention to the breath.\n 6) Be kind to your wandering mind : Don’t judge yourself or obsess over the content of the thoughts you find yourself lost in. Just come back.\n 7) Close with kindness:When you’re ready, gently lift your gaze (if your eyes are closed, open them). Take a moment and notice any sounds in the environment. Notice how your body feels right now. Notice your thoughts and emotions."}></MediCard>
                        </IonRow>
                        <IonRow>
                            <MediCard topic={"Can you medidate ?"} img={"https://i.postimg.cc/ncD44jWh/pic4.jpg"} para="When you find yourself asking that question, your meditation has officially begun. Everyone wonders that. Notice it. Escort your attention back to your object of focus (the breath). When you’re lost and questioning again, come back to the breathe again. That’s the practice. There’s no limit to the number of times you can be distracted and come back to the breath. Meditating is not a race to perfection—It’s returning again and again to the breath."></MediCard>
                        </IonRow>
                    </IonGrid>
                    
                        {/* <img src="https://i.postimg.cc/Y0YJVL1R/Meditation-at-Home.png"></img> */}
                    
                </IonContent>
            </IonPage>
    )
}

export default Medidate;