import './LinearCode.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import {db} from "../firebase.jsx";

function LinearCode() {
  const [text01, setText01] = useState("");
  const [text02, setText02] = useState("");
  const [text03, setText03] = useState("");
  const [code01, setCode01] = useState("");
  const [code02, setCode02] = useState("");
  const [code03, setCode03] = useState("");
  const [result, setResult] = useState("");


  useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("eTfYr1urtkB6VtqL2Tyv");
        const doc = await ref.get();
       
        setText01(doc.get("text01"));
        setText02(doc.get("text02"));
        setText03(doc.get("text03"));
        setCode01(doc.get("code01"));
        setCode02(doc.get("code02"));
        setCode03(doc.get("code03"));
        setResult(doc.get("result"));
      };

      fetch();
    }, [])
  
  const navigate = useNavigate();

  return(
  <>
  <div className="linearCRoot">
    <div className="liContainer">
      <div className="liCodeArea" style={{ whiteSpace: "pre-wrap" }}>
        <h2>疑似言語で実装</h2>
        <p>{text01}</p>
        <div className="liCode">
          <p>{code01}</p>
        </div>
        <p>{text02}</p>
        <div className="liCode">
          <p>{code02}</p>
        </div>
        <p>{text03}</p>
        <div className="liCode">
          <p>{code03}</p>
        </div>
        <p>説明を省いて疑似言語の部分だけを書くと次のようになります。</p>
        <div className="liCode">
          <p>{code01}</p>
          <p>{code02}</p>
          <p>{code03}</p>
          <p>{result}</p>
        </div>
        <p>最後に問題を解いて線形探索の復習をしましょう。</p>  
      </div>
      <div className='linkArea'>
        <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
        <p className="toLinearCoEdit" onClick={() => navigate("/LinearCodeEdit", { state: {text01,  text02, text03, code01, code02, code03, result}})}>編集</p>
        <p className="toLinearPractice" onClick={() => navigate("/LinearPractice")}>問題を解く⇒</p>
      </div>  
    </div>
  </div>
  </>
  )  
}

export default LinearCode