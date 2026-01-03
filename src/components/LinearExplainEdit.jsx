import { useState} from 'react';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {db} from "../firebase.jsx";
import './LinearExplainEdit.css';

function LinearExplainEdit(){
  const navigate = useNavigate();  
  const location = useLocation();
  const title = location.state.title;
  const [text01, setText01] = useState(location.state.text01);
  const [text02, setText02] = useState(location.state.text02);
  const isCorrectQ1 = location.state.isCorrectQ1;
  const isCorrectQ2 = location.state.isCorrectQ2;
  const isCorrectQ3 = location.state.isCorrectQ3;
  const isCorrectQ4 = location.state.isCorrectQ4;
  const mode = location.state.mode;
  
  async function confirm() {
    const ref = db.collection("algorithms").doc("naSyKL4rsYKA67xBqFXg");
    await ref.set({
    title: title,
    text01: text01,
    text02: text02
    });
    navigate("/LinearExplain");
  }  

  return(
    <>
      <div className="linearRoot">
        <div className="liContainer">
          <div className="liExplainEdit">
            <p>説明1:</p>
            <textarea defaultValue={text01}  type='text' onChange={(e) => setText01(e.target.value)} rows={10}/>
            <p>説明2:</p>
            <textarea defaultValue={text02}  type='text' onChange={(e) => setText02(e.target.value)} rows={10}/>
            <button onClick={confirm}>確定</button>    
          </div>
            <div className='linkArea'>
              <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
              <p className="toBLinearExplain" onClick={() => navigate("/LinearExplain", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>解説へ戻る</p>
            </div> 
          </div>
        </div>
      </>
  ) 
} 
export default LinearExplainEdit
