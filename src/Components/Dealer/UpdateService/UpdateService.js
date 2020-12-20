import React, { useState } from 'react';
import './UpdateService.css'
import {Form,Row,Col,Button} from 'react-bootstrap'
import { useHistory} from 'react-router-dom';
 import firebase from '../../Database/Database.js'
 import { useLocalStorage } from '../../LocalStorage/Local.js';
 import {firebaseApp} from '../../Database/Database.js'

const UpdateService = () => {

    const history = useHistory();
  const [name, setName] = useLocalStorage('username', 'null');
  const [state , setstate] = useState({
    sname : "",
    description : "",
    image : "",
    erro:"",
    imgname:"",
    dupname:"",
    price:"",
    id:"",
    delimg:"",
    ad:""
    });
    

    const onFileChange = async (e) => {
        if(e){
        const file =e.target.files[0];
        const storageRef = firebaseApp.storage().ref();
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            setstate({...state ,delimg:state.image, 
                image:(await fileRef.getDownloadURL()),
                imgname:(file.name),          
            });
            console.log(state.delimg)
            console.log(state.imgname)
        }
      };

      const onSubmit = async () => {
         if(!state.sname){
         setstate({...state , erro:'Enter Service Name'});
        }
        else if(!state.description){
         setstate({...state , erro:'Enter Description'});
        }
        else if(!state.price){
            setstate({...state , price:'Enter Service Price'});
           }
        else{
            const db = firebase.collection('Services');
                const snapshot = await db.where('sname', '==', state.sname).get();
                snapshot.forEach(doc => {
                    setstate(state=>({...state , dupname: doc.data().sname}));
                });
                if(state.dupname){
                    setstate({...state , erro:'Name Already Exist'});
                }
            else{
                if(!state.image){
                   setstate({...state , erro:'Upload Picture'});
                }
                else{
                    setstate({...state , erro:''});
                    
                   databas();
                }
            }
        }
    
     };
     const databas = async () => {
        const db = firebase.collection('Services');
        const docRef =await db.doc(state.id).update({
        sname:state.sname,
        description:state.description,
        price:state.price,
        imgname:state.imgname,
        images:state.image
        });
        // if(state.delimg){
        //     const storageRef = firebaseApp.storage().ref();
        //     const fileRef = storageRef.child(state.imgname).delete();
        // }
     history.push("/Dealer/ViewServices")
     };

     const find = async () =>{
        const db = firebase.collection('Services');
        const snapshot = await db.where('email', '==', name)
        .where('sname', '==', state.sname).get();
        
        if(snapshot.empty){
            setstate({...state, erro:"No Data Found"})
        }
        snapshot.forEach(doc => {
            setstate({...state, description: doc.data().description ,
                 price:doc.data().price,
                 image:doc.data().images,
                 imgname:doc.data().imgname,
                 id:doc.id,
                 ad:"talat",
                 erro:""
                });  
            });
            
     }

     const delet = async () =>{
            const storageRef = firebaseApp.storage().ref();
            const fileRef = storageRef.child(state.imgname).delete();

            const db = firebase.collection('Services').doc(state.id).delete();

           history.push("/Dealer/ViewServices")
     }

    return ( 
        <div>
                   {!state.ad ?
                   <div> 
                   <Row>
                   <Col><label>Enter Service Name</label></Col>
                   <Col><input 
                   type="text" 
                   placeholder="Enter Title"
                   value={state.sname}
            onChange={e => setstate({...state ,sname : e.target.value})}
            />
                   </Col>
                   <Col><Button 
               className="bton"
               variant="primary" 
               onClick={find}>Find Service</Button></Col>
               </Row> 
               <Row><p id="eror">{state.erro}</p></Row>
               </div>
               : 
               
               <Form className="Add-service">
               <Row>
                   <Col><label>Enter Service Name</label></Col>
                   <Col><input 
                   type="text" 
                   placeholder="Enter Title"
                   value={state.sname}
            onChange={e => setstate({...state ,sname : e.target.value})}
            />
                   </Col>
               </Row>
              <Row>
                  <Col><label>Description</label></Col>
                  <Col><textarea 
                  class="form-control" 
                  rows="10"
                  value={state.description}
            onChange={e => setstate({...state ,description : e.target.value})}
                  >
                  </textarea></Col>
              </Row>
            <Row>
                <Col> 
                </Col>
            </Row>
            <Row>
                   <Col><label>Service Price</label></Col>
                   <Col><input 
                   type="text" 
                   placeholder="Enter Title"
                   value={state.price}
            onChange={e => setstate({...state ,price : e.target.value})}
            />
                   </Col>
               </Row>
               <Row>
              {state.image ? <img width="200" height="200" src={state.image}/> : <p></p>}
               </Row>
               <Row>
                <Col>
                <input type="file" onChange={onFileChange} />
                </Col>
            </Row>
           <Row>
               <p id="eror">{state.erro}</p>
            </Row>
               <Row>
               <Button 
               className="bton"
               variant="primary" 
               onClick={onSubmit}>Update Service</Button>
               <Button 
               className="bton"
               variant="primary" 
               onClick={delet}>Delete Service</Button>
           </Row>
           </Form>
           } 
               
                
             
        
            </div>
     );
}
 
export default UpdateService;

