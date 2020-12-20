import React, { useState } from 'react';
import './AddingService.css'
 import {Form,Row,Col,Button} from 'react-bootstrap'
 import {firebaseApp} from '../../Database/Database.js'
 import { useHistory} from 'react-router-dom';
 import firebase from '../../Database/Database.js'
 import { useLocalStorage } from './../../LocalStorage/Local';

const AddingService = () => {
  const history = useHistory();
  const [name, setName] = useLocalStorage('username', 'null');
  const [state , setstate] = useState({
    service : "",
    sname : "",
    description : "",
    image : "",
    erro:"",
    imgname:"",
    dupname:"",
    price:""
    });
    

    const onFileChange = async (e) => {
        if(e){
        const file =e.target.files[0];
        const storageRef = firebaseApp.storage().ref();
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            setstate({...state , image:(await fileRef.getDownloadURL()),
                imgname:(file.name)           
            });
        }
      };

      const onSubmit = async () => {
        if(!state.service){
            setstate({...state , erro:'Select Service'});
        }
        else if(!state.sname){
         setstate({...state , erro:'Enter Service Name'});
        }
        else if(!state.description){
         setstate({...state , erro:'Enter Description'});
        }
        else if(!state.price){
            setstate({...state , erro:'Enter Service Price'});
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
                    console.log(state.image)
                    console.log(state.imgname)
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
          firebase.collection('Services')
          .add({
          service: state.service,
          sname:state.sname,
          images:state.image,
          description:state.description,
          email:name,
          imgname:state.imgname,
          price:state.price
          })
     history.push("/Dealer/ViewServices")
     };

    return ( 
        <div>
                <Form className="Add-service">
                    <Row>
                        <Col>
                        <label>Select Service</label>
                        </Col>
                        <Col>
                        <select 
                        id="dropdown" 
                        value={state.service}
                        onChange={e => setstate({...state ,service : e.target.value})}
                        >
                        <option value="">Select Service</option>
                        <option value="Car Rental">Car Rental</option>
                        <option value="Catering">Catering</option>
                        <option value="Decorator">Decorator</option>
                        <option value="Event Manager">Event Manager</option>
                        <option value="Photography">Photography</option>
                        <option value="Saloon">Saloon</option>
                        <option value="Wedding Hall">Wedding Hall</option>
                        </select>
                        </Col>
                    </Row>
               <Row>
                   <Col><label>Service Name</label></Col>
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
                   <Col><label>Service Price</label></Col>
                   <Col><input 
                   type="text" 
                   placeholder="Enter Price"
                   value={state.price}
            onChange={e => setstate({...state ,price : e.target.value})}
            />
                   </Col>
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
               onClick={onSubmit}>Add Service</Button>
           </Row>
                
                </Form>
             
        
            </div>
     );
}
 
export default AddingService;
