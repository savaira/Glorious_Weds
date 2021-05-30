import React,{useState,useEffect} from "react";
import { Container,Row,Col} from "react-bootstrap";
import './Template5.css'
import dg5 from './dg7.png'
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import download from "downloadjs"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CompactPicker, GithubPicker } from 'react-color';
import Draggable from "react-draggable";
import Delcon from '@material-ui/icons/Delete';
import Down from '@material-ui/icons/CloudDownload';
import Re from '@material-ui/icons/Restore';
const useStyles = makeStyles({
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
  });
  const useStyle = makeStyles({
    root: {
      background: 'gainsboro',
      border: 'none',
      fontSize: '17px',
      color: 'black',
      fontWeight:'bold',
      '&:hover': {
        color: 'black',
        background:'white'
    }
    },
  });
  const useSty = makeStyles({
    root: {
      background: 'gainsboro',
      border: '1px solid black',
      fontSize: '10px',
      color: 'black',
      height:40,
      width:70,
      fontWeight:'bold',
      '&:hover': {
        color: 'black',
        background:'white'
    }
    },
  });
const Template5 = (props) => {
    const classes = useStyles();
    const ab=useStyle();
    const ac=useSty();
   const click=()=>{
    htmlToImage.toPng(document.getElementById('ab'))
    .then(function (dataUrl) {
      download(dataUrl, 'card.png');
    });

 }
    const {bname,gname,bfname,fdate,venue,ftype,dtime,error,tempno} =
    (props.name.location && props.name.location.field) || {};
      const [cardColor,setCardColor]=useState({
        bgColor:"pink"
       })
       const[select,setselect]=useState('');
       const[display,setdisplay]=useState({
        displayColorPicker:false
    });
    const[display2,setdisplay2]=useState({
        displayColorPicker2:false
    });
    const handleClick = () => {
        setdisplay({ displayColorPicker: !display.displayColorPicker })
      };
    
      const handleClose = () => {
        setdisplay({ displayColorPicker: false })
      };
      const handleClick2 = () => {
        setdisplay2({ displayColorPicker2: !display2.displayColorPicker2 })
      };
    
      const handleClose2 = () => {
        setdisplay2({ displayColorPicker2: false })
      };
      const popover = {
        position: 'absolute',
        marginTop:'2px',
        marginLeft:'2px'
      }
      const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      }
      const popover2 = {
        position: 'absolute',
        marginTop:'8px',
        marginLeft:'25px'
      }
      const cover2 = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      }
     
         const[field,setfield]=useState({
             style:"Times New Roman",
             size:"20px",
             color:"blue",
             bold:"bold",
             italics:"italic",
             bgColor:"maroon",
             textAlignment:"center"
         });
         const[field1,setfield1]=useState({
             style:" Lucida Handwriting",
             size:"25px",
             color:"green",
             bold:"bold",
             italics:"",
             bgColor:"pink",
             textAlignment:"none",
             data:"Mr. Khalid Riaz Butt",
     
         });
         const[field2,setfield2]=useState({
             style:"Times New Roman",
             size:"16px",
             color:"red",
             bold:"",
             italics:"",
             bgColor:"pink",
             textAlignment:"center",
             data:"Requests the honour of your presence at the Wedding Ceremony of her beloved daughter"
         });
         const[field3,setfield3]=useState({
             style:"Lucida Handwriting",
             size:"25px",
             color:"green",
             bold:"",
             italics:"",
             bgColor:"pink",
             textAlignment:"none",
             data:"Shahtaj Khalid"
         });
         const[field4,setfield4]=useState({
             style:"Lucida Handwriting",
             size:"17px",
             color:"red",
             bold:"",
             italics:"",
             bgColor:"pink",
             textAlignment:"none",
             data:"with"
         });
         const[field5,setfield5]=useState({
             style:"Lucida Handwriting",
             size:"25px",
             color:"green",
             bold:"",
             italics:"",
             bgColor:"pink",
             textAlignment:"none",
             data:"Ata ul Mustafa"
         });
         const[field6,setfield6]=useState({
           style:"Copperplate",
           size:"24px",
           color:"red",
           bold:"bold",
           italics:"",
           bgColor:"pink",
          textAlignment:"none",
           data:"Barat"
       });
       const[field7,setfield7]=useState({
         style:"Times New Roman",
         size:"15px",
         color:"red",
         bold:"",
         italics:"",
         bgColor:"pink",
         textAlignment:"none",
         data:"Saturday, 24 October,2020"
     });
     const[field8,setfield8]=useState({
       style:"Times New Roman",
       size:"15px",
       color:"red",
       bold:"",
       italics:"",
       bgColor:"pink",
       textAlignment:"none",
       data:"6:30 pm"
     });
     const[field9,setfield9]=useState({
       style:"Times New Roman",
       size:"16px",
       color:"red",
       bold:"",
       italics:"",
       bgColor:"pink",
     textAlignment:"center",
       data:"Celebrations Marquee F-752, 6 Road Satellite Town Rawalpindi"
     });
 
      const setdata = () =>{
        setfield1({...field1 ,
            data :bfname,
            style:" Lucida Handwriting",
             size:"25px",
             color:"green",
             bold:"bold",
             italics:"",
             bgColor:"pink",
             textAlignment:"none",
        })
        setfield2({...field2 ,
            style:"Times New Roman",
            size:"16px",
            color:"red",
            bold:"",
            italics:"",
            bgColor:"pink",
            textAlignment:"center",
            data:"Requests the honour of your presence at the Wedding Ceremony of her beloved daughter"
        })
        setfield3({...field3 ,
            data :bname,
            style:"Lucida Handwriting",
             size:"25px",
             color:"green",
             bold:"",
             italics:"",
             bgColor:"pink",
             textAlignment:"none",
        })
        setfield4({...field4 ,
            style:"Lucida Handwriting",
            size:"17px",
            color:"red",
            bold:"",
            italics:"",
            bgColor:"pink",
            textAlignment:"none",
            data:"with"
        })
        setfield5({...field5 ,
            data :gname,
            style:"Lucida Handwriting",
            size:"25px",
            color:"green",
            bold:"",
            italics:"",
            bgColor:"pink",
            textAlignment:"none",
        })
        setfield6({...field6 ,
            data :ftype,
            style:"Copperplate",
            size:"24px",
            color:"red",
            bold:"bold",
            italics:"",
            bgColor:"pink",
           textAlignment:"none",
        })
        setfield7({...field7 ,
            data :fdate,
            style:"Times New Roman",
         size:"15px",
         color:"red",
         bold:"",
         italics:"",
         bgColor:"pink",
         textAlignment:"none",
        })
        setfield8({...field8 ,
            data :dtime,
            style:"Times New Roman",
            size:"15px",
            color:"red",
            bold:"",
            italics:"",
            bgColor:"pink",
            textAlignment:"none",
        })
        setfield9({...field9 ,
            data :venue,
            style:"Times New Roman",
       size:"16px",
       color:"red",
       bold:"",
       italics:"",
       bgColor:"pink",
     textAlignment:"center",
        })
        
        setCardColor({...cardColor , bgColor:"pink"});
      }
    useEffect(async() => {
        setdata();
      },[props.name]);
         const selected=(a)=>{
             setselect(a);
             if(a==1){
                 setfield({...field , style : field1.style , color : field1.color , size : field1.size,textAlignment:field1.textAlignment})
             }
             else if(a==2){
                 setfield({...field ,style : field2.style , color : field2.color , size : field2.size,textAlignment:field2.textAlignment})
             }
             else if(a==3){
                 setfield({...field ,style : field3.style , color : field3.color , size : field3.size,textAlignment:field3.textAlignment})
             }
             else if(a==4){
                 setfield({...field ,style : field4.style , color : field4.color , size : field4.size,textAlignment:field4.textAlignment})
             }
             else if(a==5){
               setfield({...field ,style : field5.style , color : field5.color , size : field5.size,textAlignment:field5.textAlignment})
           }
           else if(a==6){
             setfield({...field ,style : field6.style , color : field6.color , size : field6.size,textAlignment:field6.textAlignment})
         }
         else if(a==7){
           setfield({...field ,style : field7.style , color : field7.color , size : field7.size,textAlignment:field7.textAlignment})
       }
       else if(a==8){
         setfield({...field ,style : field8.style , color : field8.color , size : field8.size,textAlignment:field8.textAlignment})
     }
             else {
                 setfield({...field ,style : field9.style , color : field9.color , size : field9.size,textAlignment:field9.textAlignment})
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
             else if(select==5){
               if(field5.bold){
                   setfield4({...field5 ,bold : ''})
               }
               else{
                   setfield5({...field5 ,bold : 'bold'})
               }
           }
           else if(select==6){
             if(field6.bold){
                 setfield6({...field6 ,bold : ''})
             }
             else{
                 setfield6({...field6 ,bold : 'bold'})
             }
         }
         else if(select==7){
           if(field7.bold){
               setfield4({...field7 ,bold : ''})
           }
           else{
               setfield7({...field7 ,bold : 'bold'})
           }
       }
       else if(select==8){
         if(field8.bold){
             setfield8({...field8 ,bold : ''})
         }
         else{
             setfield8({...field8 ,bold : 'bold'})
         }
     }
             else {
                 if(field9.bold){
                     setfield9({...field9 ,bold : ''})
                 }
                 else{
                     setfield9({...field9 ,bold : 'bold'})
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
             else if(select==5){
               if(field5.italics){
                   setfield5({...field5 ,italics : ''})
               }
               else{
                   setfield5({...field5 ,italics : 'italic'})
               }
           }
           else if(select==6){
             if(field6.italics){
                 setfield6({...field6 ,italics : ''})
             }
             else{
                 setfield6({...field6 ,italics : 'italic'})
             }
         }
         else if(select==7){
           if(field7.italics){
               setfield7({...field7 ,italics : ''})
           }
           else{
               setfield7({...field7 ,italics : 'italic'})
           }
       }
       else if(select==8){
         if(field8.italics){
             setfield8({...field8 ,italics : ''})
         }
         else{
             setfield8({...field8 ,italics : 'italic'})
         }
     }
             else {
                 if(field9.italics){
                     setfield9({...field9 ,italics : ''})
                 }
                 else{
                     setfield9({...field9 ,italics : 'italic'})
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
             else if(select==5){
               setfield5({...field5 ,style : e.target.value})
           }
           else if(select==6){
             setfield6({...field6 ,style : e.target.value})
         }
         else if(select==7){
           setfield7({...field7 ,style : e.target.value})
       }
       else if(select==8){
         setfield8({...field8 ,style : e.target.value})
     }
             else {
                 setfield9({...field9 ,style : e.target.value})
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
             else if(select==5){
               setfield5({...field5 ,size : e.target.value})
           }
           else if(select==6){
             setfield6({...field6 ,size : e.target.value})
         }
         else if(select==7){
           setfield7({...field7 ,size : e.target.value})
       }
       else if(select==8){
         setfield8({...field8 ,size : e.target.value})
     }
             else {
                 setfield9({...field9 ,size : e.target.value})
             }
         }
     
         const ChngColor = (color) =>{
            if(!select){
                setfield({...field ,color:color.hex})
            }
            else if(select==1){
                setfield1({...field1 ,color : color.hex})
            }
            else if(select==2){
                setfield2({...field2 ,color : color.hex})
            }
            else if(select==3){
                setfield3({...field3 ,color : color.hex})
            }
            else if(select==4){
                setfield4({...field4 ,color : color.hex})
            }
            else if(select==5){
              setfield5({...field5,color : color.hex})
          }
          else if(select==6){
            setfield6({...field6 ,color : color.hex})
        }
        else if(select==7){
          setfield7({...field7 ,color : color.hex})
      }
      else if(select==8){
        setfield8({...field8 ,color : color.hex})
    }
            else {
                setfield9({...field9 ,color : color.hex})
            }
        }
         const ChngbgColor=(color)=>{
            setCardColor({bgColor:color.hex})
            setfield1({...field1,bgColor:color.hex})
            setfield2({...field2,bgColor:color.hex})
            setfield3({...field3,bgColor:color.hex})
            setfield4({...field4,bgColor:color.hex})
            setfield5({...field5,bgColor:color.hex})
            setfield6({...field6,bgColor:color.hex})
            setfield7({...field7,bgColor:color.hex})
            setfield8({...field8,bgColor:color.hex})
            setfield9({...field9,bgColor:color.hex})
        }
         const ChngtextAlign = (e) =>{
             if(!select){
                 setfield({...field ,textAlignment : e.target.value})
             }
             else if(select==1){
                 setfield1({...field1 ,textAlignment : e.target.value})
             }
             else if(select==2){
                 setfield2({...field2 ,textAlignment : e.target.value})
             }
             else if(select==3){
                 setfield3({...field3 ,textAlignment : e.target.value})
             }
             else if(select==4){
                 setfield4({...field4 ,textAlignment : e.target.value})
             }
             else if(select==5){
               setfield5({...field5,textAlignment : e.target.value})
           }
           else if(select==6){
             setfield6({...field6 ,textAlignment : e.target.value})
         }
         else if(select==7){
           setfield7({...field7 ,textAlignment : e.target.value})
       }
       else if(select==8){
         setfield8({...field8 ,textAlignment : e.target.value})
     }
             else {
                 setfield9({...field9 ,textAlignment : e.target.value})
             }
         }
         const reset=()=>{
            setdata();
            var x1 = document.getElementById("f1");
            var x2 = document.getElementById("f2");
            var x3 = document.getElementById("f3");
            var x4 = document.getElementById("f4");
            var x5 = document.getElementById("f5");
            var x6 = document.getElementById("f6");
            var x7 = document.getElementById("f7");
            var x8 = document.getElementById("f8");
            var x9 = document.getElementById("f9");
            if (window.getComputedStyle(x1).visibility === "hidden") {
              x1.style.visibility = "visible";
            } 
            if (window.getComputedStyle(x2).visibility === "hidden") {
              x2.style.visibility = "visible";
            } 
            if (window.getComputedStyle(x3).visibility === "hidden") {
              x3.style.visibility = "visible";
            } 
            if (window.getComputedStyle(x4).visibility === "hidden") {
              x4.style.visibility = "visible";
            }
            if (window.getComputedStyle(x5).visibility === "hidden") {
                x5.style.visibility = "visible";
                }
            if (window.getComputedStyle(x6).visibility === "hidden") {
                    x6.style.visibility = "visible";
                    }
            if (window.getComputedStyle(x7).visibility === "hidden") {
                        x7.style.visibility = "visible";
                        }
            if (window.getComputedStyle(x8).visibility === "hidden") {
                            x8.style.visibility = "visible";
                            }
            if (window.getComputedStyle(x9).visibility === "hidden") {
                                x9.style.visibility = "visible";
                                }
                }
                
  const deleteField = () => {
    if (select == 1) {
      document.getElementById("f1").style.visibility = "hidden";
    } else if (select == 2) {
      document.getElementById("f2").style.visibility = "hidden";
    } else if (select == 3) {
      document.getElementById("f3").style.visibility = "hidden";
    } else if (select == 4) {
      document.getElementById("f4").style.visibility = "hidden";
    } else if (select == 5) {
      document.getElementById("f5").style.visibility = "hidden";
    } else if (select == 6) {
      document.getElementById("f6").style.visibility = "hidden";
    } else if (select == 7) {
      document.getElementById("f7").style.visibility = "hidden";
    } else if (select == 8) {
      document.getElementById("f8").style.visibility = "hidden";
    } else {
      document.getElementById("f9").style.visibility = "hidden";
    }
  };
    return ( 
        <div>
           <Container className="toolbar1" >
        <Row>
            
          <Col className="toolItems">
             <h5 className="btName">Font Style</h5>
       
          <select 
            style={{marginTop:"8px"}}
        className="toolItems" 
        id="input-font" 
        class="input "
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
        <option value="Lucida Handwriting">Lucida Handwriting</option> 
        <option value="Copperplate">Copperplate</option> 
        <option value="Trebuchet MS">Trebuchet MS</option> 
        <option value="ALGERIAN">ALGERIAN</option> 
        <option value="Brush Script MT">Cursive</option>  
    </select> 
          </Col>
       <Col className="toolItems">
       <h5 className="btName">Size</h5>
       <select 
         style={{marginTop:"8px"}}
    className="toolItems" 
    id="input-font" 
    class="input"
    value={field.size}
    onChange={ChngSize}
    > 
    <option value="13px" 
        selected="selected"> 
        13
    </option> 
    
    <option value="15px">15</option>
    <option value="16px">16</option>
    <option value="17px">17</option>
    <option value="18px">18</option> 
    <option value="20px">20</option>
    <option value="22px">22</option> 
   <option value="23px">23</option>
   <option value="24px">24</option>  
    <option value="25px">25</option>
    <option value="27px">27</option> 
    <option value="28px">28</option>
    </select> 
    
       </Col>
       <Col className="toolItems">
    <h5 className="btName">Color</h5>
    <Button className={ac.root}  onClick={handleClick }>Select</Button>
             { display.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ handleClose }/>
          <CompactPicker colors={['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', 'goldenrod', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', 'purple', '#FDA1FF', '#333333', '#808080', '#cccccc', 'red', '#E27300', 'gold', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', 'maroon', 'orange', 'yellow', '#808900', '#194D33', '#0C797D', '#0062B1','pink','navy']} color={field.color} onChangeComplete={ChngColor} />
        </div> : null }
    </Col>
        <Col sm={2} className="toolItems">
        <h5 className="btName" sm={9}>Card Color</h5>
        <Button className={ac.root}  onClick={handleClick2 }>Pick Color</Button>
             { display2.displayColorPicker2 ? <div style={ popover2 }>
          <div style={ cover2 } onClick={ handleClose2 }/>
          <GithubPicker  colors={ ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', 'maroon', 'purple', 'black', 'navy', 'pink', 'gray']} color={field.color} onChangeComplete={ChngbgColor} />
        </div> : null }
    </Col>
    <Col className="toolItems">
    <h5 className="btName" >Alignment</h5>
    <select 
      style={{marginTop:"8px"}}
    className="toolItems" 
    id="input-font" 
    class="input"
    value={field.textAlignment}
    onChange={ChngtextAlign}
    > 
        <option value="right" 
            selected="selected"> 
            Right
        </option> 
        <option value="left">Left</option>
        <option value="center">Center</option>

    </select>
    </Col>
    <Col className="toolItemsButton1" >
    <h5 className="btName">Bold</h5>
            <Button className={ab.root} onClick={BoldButton}>B</Button>
             </Col>
             <Col className="toolItemsButton1">
             <h5 className="btName" >Italics</h5>
             <Button className={ab.root} onClick={ItalicButton}>I</Button>
             </Col>
             </Row>
    </Container>
    <div style={{marginLeft:"40%"}}>
    <div id="ab" style={{height:"900px",width:"500px",marginTop:"7%"}} >
            <Container className="design5" style={{backgroundColor:cardColor.bgColor}}>
               
               <Row>
               <Col >
               <Draggable>
          <input id="f1" className="fatherName5" value={field1.data} onChange={e => setfield1({...field1 ,data : e.target.value})} onClick={() => selected(1)} style={{fontFamily:field1.style,fontSize:field1.size,fontStyle:field1.italics,fontWeight:field1.bold,color:field1.color,backgroundColor:field1.bgColor,textAlign:field1.textAlignment,width:"300px",height:"40px"}}/>
          </Draggable>
          </Col> 
               </Row>
               <Row>
            <Col>
            <Draggable>
            <textarea id="f2" className="inviteArea5"
            value={field2.data} onChange={e => setfield2({...field2 ,data : e.target.value})}  onClick={() => selected(2)} style={{fontFamily:field2.style,fontSize:field2.size,fontStyle:field2.italics,fontWeight:field2.bold,color:field2.color,backgroundColor:field2.bgColor,textAlign:field2.textAlignment,width:"400px",height:"50px"}}
            rows="2" cols="47"/>
            </Draggable>
          </Col>
            </Row>
        <Row>
            <Col>
            <Draggable>
            <input id="f3" maxlength={20} size={15} className="brideName5" value={field3.data} onChange={e => setfield3({...field3 ,data : e.target.value})}  onClick={() => selected(3)} style={{fontFamily:field3.style,fontSize:field3.size,fontStyle:field3.italics,fontWeight:field3.bold,color:field3.color,backgroundColor:field3.bgColor,textAlign:field3.textAlignment,width:"300px",height:"40px"}} />
            </Draggable>
          </Col>
            </Row>
            <Row>
            <Col>
            <Draggable>
            <input id="f4" className="with5" value={field4.data} onChange={e => setfield4({...field4 ,data : e.target.value})}  onClick={() => selected(4)} style={{fontFamily:field4.style,fontSize:field4.size,fontStyle:field4.italics,fontWeight:field4.bold,color:field4.color,backgroundColor:field4.bgColor,textAlign:field4.textAlignment,width:"200px",height:"40px"}} />
            </Draggable>
          </Col>
            </Row>
            <Row>
            <Col>
            <Draggable>
            <input id="f5" size={15} className="groomName5" value={field5.data} onChange={e => setfield5({...field5 ,data : e.target.value})} onClick={() => selected(5)} style={{fontFamily:field5.style,fontSize:field5.size,fontStyle:field5.italics,fontWeight:field5.bold,color:field5.color,backgroundColor:field5.bgColor,textAlign:field5.textAlignment,width:"300px",height:"40px"}}/>
            </Draggable>
          </Col>
            </Row>
            <Row>
            <Col>
            <Draggable>
            <input id="f6" size={10} className="funName5" value={field6.data} onChange={e => setfield6({...field6 ,data : e.target.value})}onClick={() => selected(6)} style={{fontFamily:field6.style,fontSize:field6.size,fontStyle:field6.italics,fontWeight:field6.bold,color:field6.color,backgroundColor:field6.bgColor,textAlign:field6.textAlignment,width:"250px",height:"40px"}} />
            </Draggable>
          </Col>
            </Row> 
            <Row>
            <Col>
            <Draggable>
            <input id="f7" className="funDate5" value={field7.data} onChange={e => setfield7({...field7 ,data : e.target.value})} onClick={() => selected(7)} style={{fontFamily:field7.style,fontSize:field7.size,fontStyle:field7.italics,fontWeight:field7.bold,color:field7.color,backgroundColor:field7.bgColor,textAlign:field7.textAlignment,width:"150px",height:"40px"}} />
            </Draggable>
          </Col>
            </Row> 
            <Row>
            <Col>
            <Draggable>
            <input id="f8" className="funTime5" value={field8.data} onChange={e => setfield8({...field8 ,data : e.target.value,textAlign:field8.textAlignment})} onClick={() => selected(8)} style={{fontFamily:field8.style,fontSize:field8.size,fontStyle:field8.italics,fontWeight:field8.bold,color:field8.color,backgroundColor:field8.bgColor,width:"150px",height:"40px"}} />
            </Draggable>
          </Col>
            </Row> 
            <Row>
            </Row> 
            <Row>
            <Col>
            <Draggable>
            <textarea id="f9" className="funVenueName5" rows="2" cols="30" value={field9.data} onChange={e => setfield9({...field9 ,data : e.target.value})} onClick={() => selected(9)} style={{fontFamily:field9.style,fontSize:field9.size,fontStyle:field9.italics,fontWeight:field9.bold,color:field9.color,backgroundColor:field9.bgColor,textAlign:field9.textAlignment,width:"300px",height:"50px"}} />
            </Draggable>
          </Col>
            </Row>
                <Row>
                    <Col>
                    <img src={dg5} height="300px" className="dgpic7"/>
                    </Col>
        
                </Row>


            </Container>
            </div>
    </div>
    
      <div style={{marginTop:"-18%",marginLeft:"52%"}} >
          <Row>
              <Col sm={3}>
              <Button className={classes.root} startIcon={<Re/>} onClick={reset}>
              Reset
            </Button>
          </Col>
          <Col sm={3}>
            <Button className={classes.root} startIcon={<Down/>} onClick={click}>
              Download
            </Button>
          </Col>
        </Row>
        <Row style={{marginTop:"2%",marginLeft:"13%"}}>
        <Button className={classes.root} startIcon={<Delcon/>} onClick={deleteField}>
          Delete
        </Button>
        </Row>
       
    
      </div>
        </div>
     );
}
 
export default Template5;