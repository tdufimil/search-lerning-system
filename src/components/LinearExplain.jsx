import './LinearExplain.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect} from 'react';
import {db} from "../firebase.jsx";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import cardBack from "../img/cardBack.jpg" ;
import card02 from "../img/card02.jpg" ;
import card03 from "../img/card03.jpg" ;
import card05 from "../img/card05.jpg" ;
import card06 from "../img/card06.jpg" ;
import card07 from "../img/card07.jpg" ;


function LinearExplain() {
  const [title, setTitle] = useState("");
  const [text01, setText01] = useState("");
  const [text02, setText02] = useState("");
  const [comArr, setComArr] = useState([]);
  const [newCom, setNewCom] = useState("");
  const location = useLocation();
  const isCorrectQ1 = location.state.isCorrectQ1;
  const isCorrectQ2 = location.state.isCorrectQ2;
  const isCorrectQ3 = location.state.isCorrectQ3;
  const isCorrectQ4 = location.state.isCorrectQ4;
  const mode = location.state.mode;

  useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("naSyKL4rsYKA67xBqFXg");
        const doc = await ref.get();
       
        setTitle(doc.get("title"));
        setText01(doc.get("text01"));
        setText02(doc.get("text02"));
        const arrayData = doc.data().comes;
        setComArr(arrayData);
      };

      fetch();
    }, [])
  
  const [nextIndex, setNextIndex] = useState(0);
  const cards = [card05,card03,card02,card07,card06];
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
  const [text, setText] = useState("まず一番左のカードをクリックしてめくってみてください。");
  const navigate = useNavigate();

  const cardClick = (index) => {
    if(nextIndex === index && nextIndex <= 3){
      const newFlipped = [...flipped];
      newFlipped[index] = true;
      setFlipped(newFlipped);
      setNextIndex(nextIndex + 1);

      if(nextIndex === 0){
        setText("7のカードではありませんでしたので隣のカードを調べましょう。");
      }else if(nextIndex === 1){
       setText("これも7のカードではありませんでしたのでさらに隣のカードを調べましょう。"); 
      }else if(nextIndex === 2){
        setText("同じように7のカードを見つけるまで隣のカードを調べましょう。");
      }else if(nextIndex === 3){
        setText("7のカードを見つけたので探索終了です。");
      }
    }
  }

  async function addCom(){
    const arrayRef = doc(db, "algorithms", "naSyKL4rsYKA67xBqFXg");
    await updateDoc(arrayRef, {
    comes: arrayUnion(newCom)
    });
    setNewCom("");
    window.location.reload();
  }

  return (
    <>
    <div className="linearRoot">
      <div className="liContainer">
        <div className="liExplain">
          <h2>線形探索</h2>
          <p>{text01}</p>
          <p>{text}</p>
          <div className="linearFigure">
            {cards.map((card, index) => (
              <img 
              src={flipped[index] ? card : cardBack}
              className="image"
              alt={`${index + 1}枚目のカード`}
              onClick={() => cardClick(index)}
              />
              ))}
          </div>
          {nextIndex >= 4 && ( 
            <p>{text02}</p>
          )}
          {nextIndex >= 4 && (mode === "a" ? <p>続いて線形探索の実装方法を学びましょう。</p> : <p>最後に線形探索の問題を解いてみましょう。</p>)}
        </div>
        <div className='linkArea'>
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toLinearExEdit" onClick={() => navigate("/LinearExplainEdit", { state: {title, text01, text02, isCorrectQ1, isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>編集</p>
          {mode === "a" ? <p className="toLinearCodea" onClick={() => navigate("/LinearCode", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>線形探索の実装⇒</p>
          : <p className="toLinearPractice" onClick={() => navigate("/LinearPractice", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>問題を解く⇒</p>}
        </div> 
      </div>
      <div className="liComContainer">
        <div className="liExcom">
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

export default  LinearExplain
