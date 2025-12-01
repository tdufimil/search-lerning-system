import './LinearCode.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import {db} from "../firebase.jsx";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";

function LinearCode() {
  const [text01, setText01] = useState("");
  const [text02, setText02] = useState("");
  const [text03, setText03] = useState("");
  const [code01, setCode01] = useState("");
  const [code02, setCode02] = useState("");
  const [code03, setCode03] = useState("");
  const [result, setResult] = useState("");
  const [comArr, setComArr] = useState([]);
  const [newCom, setNewCom] = useState("");


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
        const arrayData = doc.data().comes;
        setComArr(arrayData);
      };

      fetch();
    }, [])
  
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const clickButton = () => {
    setCount(count + 1);
  }

  async function addCom(){
    const arrayRef = doc(db, "algorithms", "eTfYr1urtkB6VtqL2Tyv");
    await updateDoc(arrayRef, {
    comes: arrayUnion(newCom)
    });
    setNewCom("");
    window.location.reload();
  }

  return(
  
  <div className="linearCRoot">
    <div className="liContainer">
      <div className="liCodeArea" style={{ whiteSpace: "pre-wrap" }}>
        <h2>疑似言語で実装</h2>
        <h3>概要と変数の定義</h3>
        <p>{text01}</p>
        <div className="liCode">
          <p>{code01}</p>
        </div>
        {count >=1 && (
        <>
          <h3>探索部分と出力の実装</h3>
          <p>{text02}</p>
          <div className="liCode">
            <p>{code02}</p>
          </div>
          <p>{text03}</p>
          <div className="liCode">
            <p>{code03}</p>
          </div>
        </>)}

        {count >=2 && (
        <>
          <h3>全体の疑似言語と実行結果</h3>
          <p>説明を省いて疑似言語の部分だけを書くと次のようになります。</p>
          <div className="liCode">
            <p>{code01}</p>
            <p>{code02}</p>
            <p>{code03}</p>
            <p>{result}</p>
          </div>
          <p>最後に問題を解いて線形探索の復習をしましょう。</p>
        </>)}
        {count <2 && (<button onClick={clickButton}>次へ</button>)}  
      </div>
      <div className='linkArea'>
        <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
        <p className="toLinearCoEdit" onClick={() => navigate("/LinearCodeEdit", { state: {text01,  text02, text03, code01, code02, code03, result}})}>編集</p>
        <p className="toLinearPractice" onClick={() => navigate("/LinearPractice")}>問題を解く⇒</p>
      </div>  
    </div>
    <div className="liComContainer">
      <div className="liCocom">
        <h2>質問</h2>
        <div className='coms'>
          {comArr.length !== 0 ? comArr.map((com, index) => (<p key={index}>{index + 1}:{com}</p>)) : <p>投稿されていません</p>}
        </div>
        <textarea placeholder="質問を入力"  type='text' onChange={(e) => setNewCom(e.target.value)} rows={2} cols={97}/>
        <button onClick={addCom}>投稿する</button> 
      </div>
    </div>
  </div>
  
  )  
}

export default LinearCode