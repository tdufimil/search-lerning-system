import "./BinaryExplain.css"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState } from "react"; 
import { useEffect} from 'react';
import {db} from "../firebase.jsx";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import cardBack from "../img/cardBack.jpg" ;
import card01 from "../img/card01.jpg" ;
import card02 from "../img/card02.jpg" ;
import card03 from "../img/card03.jpg" ;
import card09 from "../img/card09.jpg" ;
import card13 from "../img/card13.jpg" ;
import card18 from "../img/card18.jpg" ;


function BinaryExplain() {
  const [title, setTitle] = useState("");
  const [text01, setText01] = useState("");
  const [text02, setText02] = useState("");
  const [comArr, setComArr] = useState([]);
  const [newCom, setNewCom] = useState("");
  const [nextIndex, setNextIndex] = useState(3);
  const cards = [card01,card02,card03,card09,card13,card18,card01];
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
  const [text, setText] = useState("まず全体の中央のカード（4枚目）をめくります。");
  const [islast, setIsLast] = useState(false);
  const location = useLocation();
  const isCorrectQ1 = location.state.isCorrectQ1;
  const isCorrectQ2 = location.state.isCorrectQ2;
  const isCorrectQ3 = location.state.isCorrectQ3;
  const isCorrectQ4 = location.state.isCorrectQ4;
  const mode = location.state.mode;

  useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("Dj3qHR2p1OcPvS5ClfEb");
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
  
  const cardClick = (index) => {
    if(nextIndex === index){
      const newFlipped = [...flipped];
      newFlipped[index] = true;
      setFlipped(newFlipped);
      
      if(nextIndex === 3){
        setText("13よりも小さいカードであるため13は右半分にあることが分かります。次に右半分の中から真ん中のカード（6枚目）をめくります。");
        setNextIndex(5);
      }else if(nextIndex === 5){
       setText("これは13より大きいので、探すカードはその左側にあることが分かります。次に5枚目のカードをめくります。");
       setNextIndex(4); 
      }else if(nextIndex === 4){
        setText("13のカードが見つかったため探索は成功です。");
        setIsLast(true);
      }

    }
  }

  async function addCom(){
    const arrayRef = doc(db, "algorithms", "Dj3qHR2p1OcPvS5ClfEb");
    await updateDoc(arrayRef, {
    comes: arrayUnion(newCom)
    });
    setNewCom("");
    window.location.reload();
  }

  return (
    <>
      <div className="binaryRoot">
        <div className="biContainer">
          <div className="biExplain">
            <h2>二分探索</h2>
            <p>{text01}</p>
            <p>{text}</p>
            <div className="binaryFigure">
              {cards.map((card, index) => (
                <img 
                src={flipped[index] ? card : cardBack}
                className="binaryImage"
                alt={`${index + 1}枚目のカード`}
                onClick={() => cardClick(index)}
                />
              ))}
            </div>
            {islast && (
             <p>{text02}</p>
            )}
            {islast && (mode === "a" ? <p>続いて二分探索をprocesssingで実装してみましょう。</p> : <p>最後に二分探索の問題を解いてみましょう。</p>)}
          </div>
          <div className="linkArea">
            <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
            <p className="toBinaryExEdit" onClick={() => navigate("/BinaryExplainEdit", { state: {title, text01,  text02, isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>編集</p>
            {mode === "a" ? <p className="toBinaryCodea" onClick={() => navigate("/BinaryCode", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>processingで実装する⇒</p>
            : <p className="toBinaryPractice" onClick={() => navigate("/BinaryPractice", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>問題を解く⇒</p>}        
          </div>
        </div>
        <div className="biComContainer">
        <div className="biExcom">
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

export default  BinaryExplain