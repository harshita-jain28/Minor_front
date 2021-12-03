import { IonButton, IonCard,IonRow,IonText, IonCardContent, IonCol, IonContent, IonGrid, IonAvatar, IonCardTitle, IonIcon } from "@ionic/react"
import React,{useState} from "react"
import { chevronDownOutline,closeOutline, createOutline} from 'ionicons/icons';
type CardProps = {
    topic: string,
    img: string,
    para:string,

};
const MediCard : React.FC<CardProps> = ({topic,img,para}) =>{

    const [showContent, setContent] = useState<boolean>(false)
    const [selIcon, setIcon] = useState<boolean>(true)

    const content = () =>{
       
        setContent(true)
        setIcon(false)
    }

    const hide = () =>{
        setIcon(true)
        setContent(false)
    }
    return(

        <IonCol>
            <IonCard color="light">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonAvatar>
                                <img src={img} />
                            </IonAvatar>
                        </IonCol>
                        <IonCol size="7" className="textcol">
                            <IonText className="texts">
                                {topic}
                            </IonText>
                        </IonCol>
                        <IonCol size="2" className="down-i">
                            {selIcon ?
                            <IonIcon icon={chevronDownOutline} onClick={() => content()} size="large" color="secondary"></IonIcon>
                            :
                            <IonIcon icon={closeOutline} onClick={() => hide()} size="large" color="secondary"></IonIcon>
                            }
                        </IonCol>
                    </IonRow>
                    </IonGrid>
                    {showContent &&
               <IonCardContent>
               {para}
               </IonCardContent>
               }
               
            </IonCard>
        </IonCol>
    )
}

export default MediCard;