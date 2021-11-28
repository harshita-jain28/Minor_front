import { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, barChartOutline, calendarClearOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import DisplayEntry from "./pages/DisplayEntry"
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';
import NewEntry from './pages/NewEntry';
import Signup from './pages/Signup'
import Landing from './pages/Landing';
const App: React.FC = () => {
  const [isEntry, setEntry] = useState<boolean>(false)
  const [seldate, setSelDate] = useState(new Date().toLocaleDateString() + "");
  const [entries, setEntries] = useState<{ id: any; date: any, title: any, story: any, background: any }[]>([])
  const [title, setTitle] = useState("");
  const [diary, setDiary] = useState("");
  const [divstyle, setStyle] = useState({ "backgroundImage": "url(https://i.postimg.cc/hjZSJb9V/bg4.png)" });
  const [iswrite, setWrite] = useState(true);
  const [imgUrl, setUrl] = useState("https://i.postimg.cc/QCSnN01r/bg2.png");
  const [disImg, setImg] = useState(true);
  const [diaId, setId] = useState(1);
  const [dispDate, setDispDate] = useState("")
  const [dispTitle, setDispTitle] = useState("")
  const [dispText, setText] = useState("")

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userName, setUsername] = useState<string>("Ramu");


  const removeEntry = (diaId: number) => {
    console.log(diaId)
    const newSelectedEntry: any = entries.filter((entry) => {

      return entry.id !== diaId;
    });
    console.log(newSelectedEntry);
    setEntries(newSelectedEntry);

  };

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

  return (
    <IonApp>
      <IonReactRouter>
        {!isLoggedin ? (<IonRouterOutlet>
          <Route path="/" exact>
            <Landing setIsLoggedin={setIsLoggedin} setUsername={setUsername}  username={userName} setEntries={setEntries} setStyle={setStyle} imgUrl={imgUrl} setUrl={setUrl} divstyle={divstyle} setImg={setImg} entries={entries} ></Landing>
          </Route>
          <Route path="/tab1" exact >
            <Landing setIsLoggedin={setIsLoggedin} setUsername={setUsername}  username={userName} setEntries={setEntries} setStyle={setStyle} imgUrl={imgUrl} setUrl={setUrl} divstyle={divstyle} setImg={setImg} entries={entries}></Landing>
          </Route>
          <Route path="/tab2" exact >
            <Landing setIsLoggedin={setIsLoggedin} setUsername={setUsername}  username={userName} setEntries={setEntries} setStyle={setStyle} imgUrl={imgUrl} setUrl={setUrl} divstyle={divstyle} setImg={setImg} entries={entries}></Landing>
          </Route>
          <Route path="/tab3" exact >
            <Landing setIsLoggedin={setIsLoggedin} setUsername={setUsername}  username={userName} setEntries={setEntries} setStyle={setStyle} imgUrl={imgUrl} setUrl={setUrl} divstyle={divstyle} setImg={setImg} entries={entries}></Landing>
          </Route>
        </IonRouterOutlet>)
          :
          (
            <>
              {isEntry ? (
                <IonRouterOutlet>
                  <Route path="/" exact>
                    {iswrite ? (
                      <NewEntry setEntry={setEntry} selDate={seldate} title={title} setTitle={setTitle} diary={diary} setDiary={setDiary} setEntries={setEntries} setStyle={setStyle} imgUrl={imgUrl} setUrl={setUrl} divstyle={divstyle} setImg={setImg} diaId={diaId} setId={setId} entries={entries} username={userName} />
                    ) :
                      <DisplayEntry setEntry={setEntry} setWrite={setWrite} dispDate={dispDate} dispTitle={dispTitle} dispText={dispText} />
                    }
                  </Route>
                  <Route path="/tab1" exact>
                    {iswrite ? (
                      <NewEntry setEntry={setEntry} selDate={seldate} title={title} setTitle={setTitle} diary={diary} setDiary={setDiary} setEntries={setEntries} setStyle={setStyle} imgUrl={imgUrl} setUrl={setUrl} divstyle={divstyle} setImg={setImg} diaId={diaId} setId={setId} entries={entries} username={userName}/>
                    ) :
                      <DisplayEntry setEntry={setEntry} setWrite={setWrite} dispDate={dispDate} dispTitle={dispTitle} dispText={dispText} />
                    }
                  </Route>
                  <Route path="/tab3" exact>
                    <NewEntry setEntry={setEntry} selDate={seldate} title={title} setTitle={setTitle} diary={diary} setDiary={setDiary} setEntries={setEntries} setStyle={setStyle} imgUrl={imgUrl} setUrl={setUrl} divstyle={divstyle} setImg={setImg} diaId={diaId} setId={setId} entries={entries} username={userName}/>
                  </Route>
                  <Route path="/tab2" exact>
                    {iswrite ? (
                      <NewEntry setEntry={setEntry} selDate={seldate} title={title} setTitle={setTitle} diary={diary} setDiary={setDiary} setEntries={setEntries} setStyle={setStyle} imgUrl={imgUrl} setUrl={setUrl} divstyle={divstyle} setImg={setImg} diaId={diaId} setId={setId} entries={entries} username={userName} />
                    ) :
                      <DisplayEntry setEntry={setEntry} setWrite={setWrite} dispDate={dispDate} dispTitle={dispTitle} dispText={dispText} />
                    }
                  </Route>
                </IonRouterOutlet>

              ) : (
                <IonTabs >
                  <IonRouterOutlet>
                    <Route exact path="/tab1">
                      <Tab1 setSelDate={setSelDate} entries={entries} setEntry={setEntry} selDate={seldate} setWrite={setWrite} removeEntry={removeEntry} displayEntry={displayEntry} setEntries={setEntries} setDispDate={setDispDate} setDispTitle={setDispTitle} setText={setText} />
                    </Route>
                    <Route exact path="/tab2">

                      <Tab2 setEntry={setEntry} entries={entries} selDate={seldate} setWrite={setWrite} disImg={disImg} setEntries={setEntries} setDispDate={setDispDate} setDispTitle={setDispTitle} setText={setText} username={userName}/>

                    </Route>
                    <Route path="/tab3">
                      <Tab3 username={userName}></Tab3>
                    </Route>
                    <Route exact path="/">
                      <Redirect to="/tab1" />
                    </Route>
                  </IonRouterOutlet>
                  <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/tab1">
                      <IonIcon icon={calendarClearOutline} />

                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/tab2">
                      <IonIcon icon={ellipse} />

                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tab3">
                      <IonIcon icon={barChartOutline} />

                    </IonTabButton>
                  </IonTabBar>
                </IonTabs>
              )}
            </>
          )}

      </IonReactRouter>

    </IonApp>
  );
}

export default App;
