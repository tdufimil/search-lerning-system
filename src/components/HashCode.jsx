import './HashCode.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import {db} from "../firebase.jsx";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";

function HashCode(){
  const [text01, setText01] = useState("");
  const [text02, setText02] = useState("");
  const [text03, setText03] = useState("");
  const [text04, setText04] = useState("");
  const [text05, setText05] = useState("");
  const [code01, setCode01] = useState("");
  const [code02, setCode02] = useState("");
  const [code03, setCode03] = useState("");
  const [code04, setCode04] = useState("");
  const [code05, setCode05] = useState("");
  const [result, setResult] = useState("");
  const [comArr, setComArr] = useState([]);
  const [newCom, setNewCom] = useState("");


  useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("PbWkNrlWe76Pb8rdWMA3");
        const doc = await ref.get();
       
        setText01(doc.get("text01"));
        setText02(doc.get("text02"));
        setText03(doc.get("text03"));
        setText04(doc.get("text04"));
        setText05(doc.get("text05"));
        setCode01(doc.get("code01"));
        setCode02(doc.get("code02"));
        setCode03(doc.get("code03"));
        setCode04(doc.get("code04"));
        setCode05(doc.get("code05"));
        setResult(doc.get("result"));
        const arrayData = doc.data().comes;
        setComArr(arrayData);
      };

      fetch();
    }, [])

  const navigate = useNavigate();

  async function addCom(){
    const arrayRef = doc(db, "algorithms", "PbWkNrlWe76Pb8rdWMA3");
    await updateDoc(arrayRef, {
    comes: arrayUnion(newCom)
    });
    setNewCom("");
    window.location.reload();
  }

  return(
  <>
  <div className="hashCRoot">
    <div className="haContainer">
      <div className="haCodeArea" style={{ whiteSpace: "pre-wrap" }}>
        <h2>疑似言語で実装</h2>
        <p>{text01}</p>
        <div className="haCode">
          <p>{code01}</p>  
        </div>
        <p>{text02}</p>
        <div className="haCode">
          <p>{code02}</p>
        </div>
        <p>{text03}</p>
        <div className="haCode">
          <p>{code03}</p>
        </div>
        <p>{text04}</p>
        <div className="haCode">
          <p>{code04}</p>
        </div>
        <p>{text05}</p>
        <div className="haCode">
          <p>{code05}</p>
        </div>
        <p>説明を省いて疑似言語の部分だけを書くと次のようになります。</p>
        <div className="haCode">
          <p>{code01}</p>
          <p> </p>
          <p>{code02}</p>
          <p> </p>
          <p>{code03}</p>
          <p> </p>
          <p>{code04}</p>
          <p> </p>
          <p>{code05}</p>
          <p> </p>
          <p>{result}</p>
        </div>
        <p>最後に問題を解いてハッシュ法の復習をしましょう。</p>
      </div>
      <div className="linkArea">
        <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
        <p className="toHashCoEdit" onClick={() => navigate("/HashCodeEdit", { state: {text01,  text02, text03,  text04, text05, code01, code02, code03, code04, code05,result}})}>編集</p>
        <p className="toBinaryPractice" onClick={() => navigate("/HashPractice")}>問題を解く⇒</p>
      </div>  
    </div>
    <div className="haComContainer">
        <div className="haCocom">
          <h2>質問</h2>
          <div className='coms'>
            {comArr.length !== 0 ? comArr.map((com, index) => (<p key={index}>{index + 1}:{com}</p>)) : <p>投稿されていません</p>}
          </div>
          <textarea placeholder="質問を入力"  type='text' onChange={(e) => setNewCom(e.target.value)} rows={2} cols={97}/>
          <button onClick={addCom}>投稿する</button> 
        </div>
      </div>
  </div>
  </>
  )
}
export default HashCode   