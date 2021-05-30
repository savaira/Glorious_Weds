import React, { useEffect, useState } from 'react';
import './Chat.css'
import { useLocalStorage } from './../LocalStorage/Local';
import { useHistory} from 'react-router-dom';
import firebase from '../Database/Database';
import ch from './c.png'

const User = (props) => {

    const {user, onClick} = props;

    return (
      <div onClick={() => onClick(user)} className="displayName">
                    <div className="displayPic">
                    <img src={ch} alt="" />
                    </div>
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px'}}>
                        <span style={{fontWeight: 500}}>{user.name}</span>
                    </div>
                </div>
    );
  }

export default function Chat() {

    const history = useHistory();
    const [name, setName] = useLocalStorage('username', 'null');
    const [aray , setaray] = useState([]);
    const [conversation , setconversation] = useState([]);
    const [chatStarted, setChatStarted] = useState(false);
    const [chatUser, setChatUser] = useState('');
    const [messages, setMessage] = useState('');
    const [userUid, setUserUid] = useState(null);
    
    useEffect(async() => {
    if(name == 'null'){
    history.push("/Login")
    }
    else{
        const db = firebase.collection('User');
        const snapshot = await db.where('email', '!=',name).get();
        
        snapshot.forEach(doc => { 
            setaray(aray =>([
                ...aray,
             {
               name: (doc.data().fname),
               uid2: (doc.data().email)
             }
           ]))
         });
    }
      }, [name]);

      const initChat =async (user) => {
        
        setChatStarted(true)
        setChatUser(user.name)
        setUserUid(user.uid2);
        setconversation([]);
        
        const db = firebase.collection('Chat');
        const snapshot = await db
        .where('uid1', 'in', [name, user.uid2])
        .orderBy('createdAt', 'asc')
        .onSnapshot((querySnapshot) => {

            querySnapshot.forEach(doc => {
                    
                if(
                    (doc.data().uid1 == name && doc.data().uid2 == user.uid2)
                    || 
                    (doc.data().uid1 == user.uid2 && doc.data().uid2 == name)
                ){
                  setconversation(conversation =>([
                    ...conversation,
                 {
                   message: (doc.data().message),
                   uid1: (doc.data().uid1)
                 }
               ]));
                  }
      });
    });
  }


      const submitMessage = async() => {
        if(messages !== ''){
          firebase.collection('Chat')
         .add({
         uid1: name,
         uid2:userUid,
         message:messages,
         createdAt:new Date(),
         })
         setconversation(conversation =>([
          ...conversation,
       {
         message: (messages),
         uid1: (name)
       }
     ]));
          setMessage('');
        }
      }

      return (
        <section className="contnr">

        <div className="listOfUsers">
          {
            aray.length > 0 ?
            aray.map(user => {
              
              return (
                <User 
                  onClick={initChat}
                  key={user.uid2} 
                  user={user} 
                  />
              );
            }) : null
          }
          {console.log('test')}
        </div>
        <div className="chatArea">
            
            <div className="chatHeader"> 
            {
              chatStarted ? chatUser : ''
            }
            </div>
            <div className="messageSections">
                {
                  chatStarted ? 
                  conversation.map((con,i) =>
                    <div key={i} style={{ textAlign: con.uid1 == name ? 'right' : 'left' }}>
                    <p className="messageStyle">{con.message}</p>
                  </div> )
                  : null
                }      
            </div>
            {
              chatStarted ? 
              <div className="chatControls">
                <textarea 
                  value={messages}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Message"
                />
                <button style={{backgroundColor:"blueviolet",color:"white",fontSize:"18px"}} onClick={submitMessage}>Send</button>
            </div> : null
            }
            
        </div>
    </section>
    )
}
