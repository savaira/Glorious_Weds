import React, { useState } from 'react';
import './UpdateService.css'
import ImageUploader from 'react-images-upload';
import {Form,Row,Col} from 'react-bootstrap'
import { useHistory} from 'react-router-dom';
 import firebase from '../../Database/Database.js'
 import { useLocalStorage } from '../../LocalStorage/Local.js';
 import {firebaseApp} from '../../Database/Database.js'
 import { Button } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';
 import LoginIcon from '@material-ui/icons/FindInPage';
 import DelIcon from '@material-ui/icons/Delete';
 import UpIcon from '@material-ui/icons/Update';

 const useSty = makeStyles({
   root: {
     background: 'linear-gradient(45deg, #A52A2A 30%, #00008B 90%)',
     border: 0,
     borderRadius: 3,
     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
     color: 'white',
     height: 48,
     padding: '0 30px',
     '&:hover': {
       color: 'black'
   }
   },
 })
const UpdateService = () => {
    const classes = useSty();
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
                   <Row className="findservice">
                   <Col><label className="Serlab">Enter Service Name</label></Col>
                   <Col className="enterSer"><input 
                   className="searchService"
                   type="text" 
                   placeholder="Enter Title"
                   value={state.sname}
            onChange={e => setstate({...state ,sname : e.target.value})}
            />
                   </Col>
                   </Row>
                   <Row>
                   <Col className="findservice"><Button 
               className={classes.root} startIcon={<LoginIcon />}
               onClick={find}>Find Service</Button></Col>
               </Row> 
               <Row className="dataNotFound"><p >{state.erro}</p></Row>
               </div>
               : 
               
               <Form className="Add-service">
               <Row className="updateService">
                   <Col><label className="Serlab">Enter Service Name</label></Col>
                   <Col><input 
                   className="searchService"
                   type="text" 
                   placeholder="Enter Title"
                   value={state.sname}
            onChange={e => setstate({...state ,sname : e.target.value})}
            />
                   </Col>
               </Row>
              <Row className="updateService">
                  <Col><label className="Serlab">Description</label></Col>
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
            <Row className="updateService">
                   <Col><label className="Serlab">Service Price</label></Col>
                   <Col><input 
                   className="searchService"
                   type="text" 
                   placeholder="Enter Title"
                   value={state.price}
            onChange={e => setstate({...state ,price : e.target.value})}
            />
                   </Col>
               </Row>
               <Row  className="serBtn">
                   <Col>{state.image ? <img width="200" height="200" style={{border:'2px solid black'}} src={state.image}/> : <p></p>}</Col>
                   <Col>
                <input type="file" onChange={onFileChange} />
                </Col>
              </Row>
           <Row >
               <p id="eror">{state.erro}</p>
            </Row>
               <Row className="serBtn">
                   <Col>
                   <Button 
                className={classes.root} startIcon={<UpIcon />}
               onClick={onSubmit}>Update Service</Button>
             
                   </Col>
              <Col>
              <Button
              className={classes.root} startIcon={<DelIcon />}
               onClick={delet} >Delete Service</Button>
              </Col>
             
           </Row>
           </Form>
           } 
               
                
             
        
            </div>
     );
}
 
export default UpdateService;

