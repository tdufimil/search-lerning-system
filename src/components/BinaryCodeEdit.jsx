import { useState} from 'react';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {db} from "../firebase.jsx";
import './BinaryCodeEdit.css';

function BinaryCodeEdit(){
  const navigate = useNavigate();  
  const location = useLocation();
  const [text01, setText01] = useState(location.state.text01);
  const [text02, setText02] = useState(location.state.text02);
  const [text03, setText03] = useState(location.state.text03);
  const [code01, setCode01] = useState(location.state.code01);
  const [code02, setCode02] = useState(location.state.code02);
  const [code03, setCode03] = useState(location.state.code03);
  const [result, setResult] = useState(location.state.result);
  
  async function confirm() {
    const ref = db.collection("algorithms").doc("F8GztP0AROZiQPS7Jn4U");
    await ref.update({
    text01: text01,
    text02: text02,
    text03: text03,
    code01: code01,
    code02: code02,
    code03: code03,
    result: result
    });
    navigate("/binaryCode");
  }  

  return(
    <>
      <div className="binaryCERoot">
        <div className="biContainer">
          <div className="biCodeEdit">
            <p>説明1:</p>
            <textarea defaultValue={text01}  type='text' onChange={(e) => setText01(e.target.value)} rows={10}/>
            <p>コード1:</p>
            <textarea defaultValue={code01}  type='text' onChange={(e) => setCode01(e.target.value)} rows={10}/>
            <p>説明2:</p>
            <textarea defaultValue={text02}  type='text' onChange={(e) => setText02(e.target.value)} rows={10}/>
            <p>コード2:</p>
            <textarea defaultValue={code02}  type='text' onChange={(e) => setCode02(e.target.value)} rows={10}/>
            <p>説明3:</p>
            <textarea defaultValue={text03}  type='text' onChange={(e) => setText03(e.target.value)} rows={10}/>
            <p>コード3:</p>
            <textarea defaultValue={code03}  type='text' onChange={(e) => setCode03(e.target.value)} rows={10}/>
            <p>実行結果:</p>
            <textarea defaultValue={result}  type='text' onChange={(e) => setResult(e.target.value)} rows={2}/> 
            <button onClick={confirm}>確定</button>    
          </div>
            <div className='linkArea'>
              <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
              <p className="toBBinaryCode" onClick={() => navigate("/BinaryCode")}>疑似言語の解説へ戻る</p>
            </div> 
          </div>
        </div>
        </>
    

  ) 
} 
export default BinaryCodeEdit
