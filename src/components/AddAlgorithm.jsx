import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './AddAlgorithm.css';
import {db} from "../firebase.jsx"

function AddAlgorithm() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const addNewAlgo = () => {
    if(title !== "" && text !== ""){
      db.collection("algorithms").add({
      text: text,
      title: title
    })
    navigate("/");
    }else{
      setMsg("タイトル、解説を入力してください");
    }
  }

  return (
    <>
    <div className="addRoot">
      <div className="addContainer">
        <div className="addArea">
          <div className="newTitle">
            <h3>タイトル:</h3>            
            <textarea type='text' onChange={(e) => setTitle(e.target.value)}/>              
          </div>
          <div className="newText">
            <h3>解説:</h3>
            <textarea   type='text' onChange={(e) => setText(e.target.value)}  rows={40} />  
          </div>
          <p>{msg}</p>
          <button onClick={addNewAlgo}>追加する</button>
        </div>
      </div>    
    </div>
    </>
  )
}

export default AddAlgorithm