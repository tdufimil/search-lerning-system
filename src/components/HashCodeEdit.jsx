import { useState} from 'react';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import {db} from "../firebase.jsx";
import './HashCodeEdit.css';

function HashCodeEdit(){
  const navigate = useNavigate();  
  const location = useLocation();
  const [text01, setText01] = useState(location.state.text01);
  const [text02, setText02] = useState(location.state.text02);
  const [text03, setText03] = useState(location.state.text03);
  const [text04, setText04] = useState(location.state.text04);
  const [text05, setText05] = useState(location.state.text05);
  const [code01, setCode01] = useState(location.state.code01);
  const [code02, setCode02] = useState(location.state.code02);
  const [code03, setCode03] = useState(location.state.code03);
  const [code04, setCode04] = useState(location.state.code04);
  const [code05, setCode05] = useState(location.state.code05);
  const [result, setResult] = useState(location.state.result);
  const isCorrectQ1 = location.state.isCorrectQ1;
  const isCorrectQ2 = location.state.isCorrectQ2;
  const isCorrectQ3 = location.state.isCorrectQ3;
  const isCorrectQ4 = location.state.isCorrectQ4;
  const mode = location.state.mode;

  
  async function confirm() {
    const ref = db.collection("algorithms").doc("PbWkNrlWe76Pb8rdWMA3");
    await ref.update({
    text01: text01,
    text02: text02,
    text03: text03,
    text04: text04,
    text05: text05,
    code01: code01,
    code02: code02,
    code03: code03,
    code04: code04,
    code05: code05,
    result: result
    });
    navigate("/HashCode");
  }  

  return(
    
      <div className="hashCERoot">
        <div className="haContainer">
          <div className="haCodeEdit">
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
            <p>説明4:</p>
            <textarea defaultValue={text04}  type='text' onChange={(e) => setText04(e.target.value)} rows={10}/>
            <p>コード4:</p>
            <textarea defaultValue={code04}  type='text' onChange={(e) => setCode04(e.target.value)} rows={10}/>
            <p>説明5:</p>
            <textarea defaultValue={text05}  type='text' onChange={(e) => setText05(e.target.value)} rows={10}/>
            <p>コード5:</p>
            <textarea defaultValue={code05}  type='text' onChange={(e) => setCode05(e.target.value)} rows={10}/>  
            <p>実行結果:</p>
            <textarea defaultValue={result}  type='text' onChange={(e) => setResult(e.target.value)} rows={10}/> 
            <button onClick={confirm}>確定</button>    
          </div>
            <div className='linkArea'>
              <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
              <p className="toBHashCode" onClick={() => navigate("/HashCode", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>疑似言語の解説へ戻る</p>
            </div> 
          </div>
        </div>
        
    

  ) 
} 
export default HashCodeEdit
