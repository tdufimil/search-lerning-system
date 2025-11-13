import { useState, useEffect} from 'react';
import {db} from "../firebase.jsx";

function AddClone(){
  const [title, setTitle] = useState();
  const [text01, setText01] = useState("");
  const [text02, setText02] = useState("");
    useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("naSyKL4rsYKA67xBqFXg");
        const doc = await ref.get();
       
        console.log("title:",doc.get("title"));
        setTitle(doc.get("title"));
        setText01(doc.get("text01"));
        setText02(doc.get("text02"));
      };

      fetch();
    }, [])
  
  async function clickEvent() {
    const cityRef = db.collection("algorithms").doc("naSyKL4rsYKA67xBqFXg");
    await cityRef.set({
    title: title,
    text01: text01,
    text02: text02
    });
  }  

  return(
    <div>
      <p>hello</p>
      <p>{title}</p>
      <p>{text01}</p>
      <p>{text02}</p>
      <textarea defaultValue={title}  type='text' onChange={(e) => setTitle(e.target.value)}/>
      <button onClick={clickEvent}>kakutei</button>  
    </div>
    

  ) 
} 
export default AddClone