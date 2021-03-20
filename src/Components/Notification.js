import React, {useState } from "react";
import { Container,Button } from "react-bootstrap";
import './TextEditor.css'

 const Notification = () => {

    const[select,setselect]=useState('');

    const[field,setfield]=useState({
        style:"Times New Roman",
        size:"20px",
        color:"blue",
        bold:"bold",
        italics:"italic"
    });
    const[field1,setfield1]=useState({
        style:"Times New Roman",
        size:"20px",
        color:"blue",
        bold:"",
        italics:"",
        data:"Abc"
    });
    const[field2,setfield2]=useState({
        style:"Times New Roman",
        size:"20px",
        color:"blue",
        bold:"",
        italics:"",
        data:"Def"
    });
    const[field3,setfield3]=useState({
        style:"Times New Roman",
        size:"20px",
        color:"blue",
        bold:"",
        italics:"",
        data:"Ghi"
    });
    const[field4,setfield4]=useState({
        style:"Times New Roman",
        size:"20px",
        color:"blue",
        bold:"",
        italics:"",
        data:"Jkl"
    });
    const[field5,setfield5]=useState({
        style:"Times New Roman",
        size:"20px",
        color:"blue",
        bold:"",
        italics:"",
        data:"Xyz"
    });

    const selected=(a)=>{
        setselect(a);
        if(a==1){
            setfield({...field , style : field1.style , color : field1.color , size : field1.size})
        }
        else if(a==2){
            setfield({...field ,style : field2.style , color : field2.color , size : field2.size})
        }
        else if(a==3){
            setfield({...field ,style : field3.style , color : field3.color , size : field3.size})
        }
        else if(a==4){
            setfield({...field ,style : field4.style , color : field4.color , size : field4.size})
        }
        else {
            setfield({...field ,style : field5.style , color : field5.color , size : field5.size})
        }    
    }

    const BoldButton = () =>{
        if(!select){
            setfield({...field ,bold : ''})
        }
        else if(select==1){
            if(field1.bold){
                setfield1({...field1 ,bold : ''})
            }
            else{
                setfield1({...field1 ,bold : 'bold'})
            }
        }
        else if(select==2){
            if(field2.bold){
                setfield2({...field2 ,bold : ''})
            }
            else{
                setfield2({...field2 ,bold : 'bold'})
            }
        }
        else if(select==3){
            if(field3.bold){
                setfield3({...field3 ,bold : ''})
            }
            else{
                setfield3({...field3 ,bold : 'bold'})
            }
        }
        else if(select==4){
            if(field4.bold){
                setfield4({...field4 ,bold : ''})
            }
            else{
                setfield4({...field4 ,bold : 'bold'})
            }
        }
        else {
            if(field5.bold){
                setfield5({...field5 ,bold : ''})
            }
            else{
                setfield5({...field5 ,bold : 'bold'})
            }
        }
    }

    const ItalicButton = () =>{
        if(!select){
            setfield({...field ,italics : ''})
        }
        else if(select==1){
            if(field1.italics){
                setfield1({...field1 ,italics : ''})
            }
            else{
                setfield1({...field1 ,italics : 'italic'})
            }
        }
        else if(select==2){
            if(field2.italics){
                setfield2({...field2 ,italics : ''})
            }
            else{
                setfield2({...field2 ,italics : 'italic'})
            }
        }
        else if(select==3){
            if(field3.italics){
                setfield3({...field3 ,italics : ''})
            }
            else{
                setfield3({...field3 ,italics : 'italic'})
            }
        }
        else if(select==4){
            if(field4.italics){
                setfield4({...field4 ,italics : ''})
            }
            else{
                setfield4({...field4 ,italics : 'italic'})
            }
        }
        else {
            if(field5.italics){
                setfield5({...field5 ,italics : ''})
            }
            else{
                setfield5({...field5 ,italics : 'italic'})
            }
        }
    }
    const ChngFont = (e) =>{
        if(!select){
            setfield({...field ,style : e.target.value})
        }
        else if(select==1){
            setfield1({...field1 ,style : e.target.value})
        }
        else if(select==2){
            setfield2({...field2 ,style : e.target.value})
        }
        else if(select==3){
            setfield3({...field3 ,style : e.target.value})
        }
        else if(select==4){
            setfield4({...field4 ,style : e.target.value})
        }
        else {
            setfield5({...field5 ,style : e.target.value})
        }
    }
 
    const ChngSize = (e) =>{
        if(!select){
            setfield({...field ,size : e.target.value})
        }
        else if(select==1){
            setfield1({...field1 ,size : e.target.value})
        }
        else if(select==2){
            setfield2({...field2 ,size : e.target.value})
        }
        else if(select==3){
            setfield3({...field3 ,size : e.target.value})
        }
        else if(select==4){
            setfield4({...field4 ,size : e.target.value})
        }
        else {
            setfield5({...field5 ,size : e.target.value})
        }
    }

    const ChngColor = (e) =>{
        if(!select){
            setfield({...field ,color : e.target.value})
        }
        else if(select==1){
            setfield1({...field1 ,color : e.target.value})
        }
        else if(select==2){
            setfield2({...field2 ,color : e.target.value})
        }
        else if(select==3){
            setfield3({...field3 ,color : e.target.value})
        }
        else if(select==4){
            setfield4({...field4 ,color : e.target.value})
        }
        else {
            setfield5({...field5 ,color : e.target.value})
        }
    }

  return ( 
    <div>
        <Container className="toolbar" >
        <select 
        className="toolItems" 
        id="input-font" 
        class="input"
        value={field.style}
        onChange={ChngFont}
        > 
        <option value="Times New Roman" 
            selected="selected"> 
            Times New Roman 
        </option> 
        <option value="Arial">Arial</option> 
        <option value="fantasy">Fantasy</option> 
        <option value="Courier New">Courier</option>
        <option value="Helvetica">Helvetica</option> 
        <option value="Baskerville">Baskerville</option> 
        <option value="Roboto">Roboto</option> 
        <option value="Copperplate">Copperplate</option> 
        <option value="Trebuchet MS">Trebuchet MS</option> 
        <option value="ALGERIAN">ALGERIAN</option> 
        <option value="Brush Script MT">Cursive</option>  
    </select> 
    <select 
    className="toolItems" 
    id="input-font" 
    class="input"
    value={field.size}
    onChange={ChngSize}
    > 
    <option value="30px" 
        selected="selected"> 
        30 
    </option> 
    <option value="40px">40</option>
    <option value="50px">50</option>
    <option value="60px">60</option> 
    </select> 
    
    <select 
    className="toolItems" 
    id="input-font" 
    class="input"
    value={field.color}
    onChange={ChngColor}
    > 
        <option value="red" 
            selected="selected"> 
            Red
        </option> 
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="yellow">Yellow</option> 
      
    </select>
    <Button className="toolItems" onClick={BoldButton}>B</Button>
    <Button className="toolItems" onClick={ItalicButton}>I</Button>
    </Container>
<Container className="card" >
<input value={field1.data} onChange={e => setfield1({...field1 ,data : e.target.value})} className="textArea" onClick={() => selected(1)} style={{fontFamily:field1.style,fontSize:field1.size,fontStyle:field1.italics,fontWeight:field1.bold,color:field1.color}} />
<input value={field2.data} onChange={e => setfield2({...field2 ,data : e.target.value})} className="textArea" onClick={() => selected(2)} style={{fontFamily:field2.style,fontSize:field2.size,fontStyle:field2.italics,fontWeight:field2.bold,color:field2.color}}/>
<input value={field3.data} onChange={e => setfield3({...field3 ,data : e.target.value})} className="textArea" onClick={() => selected(3)} style={{fontFamily:field3.style,fontSize:field3.size,fontStyle:field3.italics,fontWeight:field3.bold,color:field3.color}}/>
<input value={field4.data} onChange={e => setfield4({...field4 ,data : e.target.value})} className="textArea" onClick={() => selected(4)} style={{fontFamily:field4.style,fontSize:field4.size,fontStyle:field4.italics,fontWeight:field4.bold,color:field4.color}}/>
<input value={field5.data} onChange={e => setfield5({...field5 ,data : e.target.value})}className="textArea" onClick={() => selected(5)} style={{fontFamily:field5.style,fontSize:field5.size,fontStyle:field5.italics,fontWeight:field5.bold,color:field5.color}}/>
</Container>
    </div>
   );
}
export default Notification;