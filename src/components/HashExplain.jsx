import "./HashExplain.css"
import { useState } from "react"
import { useEffect} from 'react';
import {db} from "../firebase.jsx";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import hafig1 from "../img/hafig1.JPG" 
import hafig2 from "../img/hafig2.JPG" 
import hafig3 from "../img/hafig3.jpg" 
import hafig4 from "../img/hafig4.jpg" 
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HashExplain() {
  const [title, setTitle] = useState("");
  const [text01, setText01] = useState("");
  const [text02, setText02] = useState("");
  const [comArr, setComArr] = useState([]);
  const [newCom, setNewCom] = useState("");
  const [count, setCount] = useState(0);
  const location = useLocation();
  const isCorrectQ1 = location.state.isCorrectQ1;
  const isCorrectQ2 = location.state.isCorrectQ2;
  const isCorrectQ3 = location.state.isCorrectQ3;
  const isCorrectQ4 = location.state.isCorrectQ4;
  const mode = location.state.mode;

  useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("3MifJwWfhMoMWr9YTcC9");
        const doc = await ref.get();
       
        setTitle(doc.get("title"));
        setText01(doc.get("text01"));
        setText02(doc.get("text02"));
        const arrayData = doc.data().comes;
        setComArr(arrayData);
      };

      fetch();
    }, [])

  
  const navigate = useNavigate();

  const clickButton = () => {
    setCount(count + 1);
  }

  async function addCom(){
    const arrayRef = doc(db, "algorithms", "3MifJwWfhMoMWr9YTcC9");
    await updateDoc(arrayRef, {
    comes: arrayUnion(newCom)
    });
    setNewCom("");
    window.location.reload();
  }

  return (
      <div className="hashRoot">
        <div className="haContainer">
          <div className="haExplain" style={{ whiteSpace: "pre-wrap" }}>
            <h2>ハッシュ法</h2>
            <p>{text01}</p>
            <p>例えば探し出すデータを31、ハッシュ関数を「データを10で割った余り」だとします。31÷10の余りは1であるためハッシュ表の1番を探索します。</p>
            <div className="hashFigure">
              <img src={hafig1} className="hashImage1" alt="探索" />
              <p>31を見つけることができたため探索成功です。</p>
              {count >= 1 && (
                <>
                <p>次に42を格納してみます。42÷10の余りは2であるためハッシュ表の2番を調べます。</p>
                <img src={hafig2} className="hashImage1" alt="衝突" />
                <p>しかしハッシュ表の2番はすでに82が格納されています。このように異なるデータが同じハッシュ値を生成してしまうことを衝突といいます。</p>
                </>
              )}
              {count >=2 && (
                <>
                <p>衝突が起きた時の対処法としてチェイン法とオープンアドレス法があります。</p>
                <img src={hafig3} className="hashImage2" alt="チェイン法" />
                <img src={hafig4} className="hashImage2" alt="オープンアドレス法" style={{marginLeft : "5%"}} />
                <p>{text02}</p>
                </>
              )}
              {count >=2 && (mode === "a" ? <p>続いて線形探索をprocessingで実装してみましょう。</p> : <p>最後にハッシュ法の問題を解いてみましょう。</p>)}            
            </div>
            {count <2 && (<button onClick={clickButton}>次へ</button>)}
          </div>
          <div className="linkArea">
            <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
            <p className="toHashExEdit" onClick={() => navigate("/HashExplainEdit", { state: {title, text01,  text02, isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>編集</p>
            {mode === "a" ? <p className="toHashCodea" onClick={() => navigate("/HashCode", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>processingで実装する⇒</p>
          : <p className="toBinaryPractice" onClick={() => navigate("/HashPractice", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>問題を解く⇒</p>}
          </div>
        </div>
        <div className="haComContainer">
        <div className="haExcom">
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

export default  HashExplain