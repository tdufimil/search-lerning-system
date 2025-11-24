import './BinaryCode.css';
import { useEffect } from 'react';
import { useState } from 'react';
import {db} from "../firebase.jsx";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";


function Asd() {
  const [text01, setText01] = useState([]);
  const [te, setTe] = useState("");

  useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("aPMcNWpSrFHCbPFF19jd");
        const doc = await ref.get();
        const arrayData = doc.data().comments;
        setText01(arrayData);
      };

      fetch();
    }, [])

  async function calc(){
    const arrayRef = doc(db, "algorithms", "aPMcNWpSrFHCbPFF19jd");
    await updateDoc(arrayRef, {
    comments: arrayUnion(te)
    });
  }

  return(
    <>
    <p>p</p>
    {text01.length !== 0 ? text01.map((com, index) => (<p key={index}>{index}:{com}</p>)) : <p>nocom</p>}
    <textarea defaultValue="hello"  type='text' onChange={(e) => setTe(e.target.value)} rows={10}/>
    <button onClick={calc}>go</button>  
    </>
  )  

}
export default Asd