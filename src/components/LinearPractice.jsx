import "./LinearPractice.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect} from 'react';
import {db} from "../firebase.jsx";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import cardBack from "../img/cardBack.jpg" ;
import card01 from "../img/card01.jpg" ;
import card02 from "../img/card02.jpg" ;
import card03 from "../img/card03.jpg" ;
import card04 from "../img/card04.jpg" ;
import card05 from "../img/card05.jpg" ;
import card06 from "../img/card06.jpg" ;
import card07 from "../img/card07.jpg" ;
import card08 from "../img/card08.jpg" ;
//import liq4ans from "../img/liq4ans.jpg" ;



function LinearPractice(){
  const [comArr, setComArr] = useState([]);
  const [newCom, setNewCom] = useState("");
  const location = useLocation();
  const cardsQ1 = [card06, card02, card08, card03, card01];
  const cardsQ2 = [cardBack, cardBack, cardBack, cardBack, cardBack, cardBack];
  const cardsQ3 = [card03, card08, card02, card01, card05, card07, card04];
  const [flipped, setFlipped] = useState(Array(cardsQ1.length).fill(false));
  const [nextIndexQ1, setNextIndexQ1] = useState(0);
  const [answerQ3, setAnswerQ3] = useState("");
  const [answerQ4_1, setAnswerQ4_1] = useState("");
  const [answerQ4_2, setAnswerQ4_2] = useState("");
  const [answerQ4_3, setAnswerQ4_3] = useState("");
  const [isCorrectQ1, setIsCorrectQ1] = useState(location.state.isCorrectQ1);
  const [isCorrectQ2, setIsCorrectQ2] = useState(location.state.isCorrectQ2);
  const [isCorrectQ3, setIsCorrectQ3] = useState(location.state.isCorrectQ3);
  const [isCorrectQ4, setIsCorrectQ4] = useState(location.state.isCorrectQ4);
  const [messageQ1, setMessageQ1] = useState("");
  const [messageQ2, setMessageQ2] = useState("");
  const [messageQ3, setMessageQ3] = useState("");
  const [messageQ4, setMessageQ4] = useState("");

  useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("bZeSHUU8RgXeTbVTaQ64");
        const doc = await ref.get();
        const arrayData = doc.data().comes;
        setComArr(arrayData);
        
        if(isCorrectQ1){
          setMessageQ1("正解！")
        }
        if(isCorrectQ2){
          setMessageQ2("正解！")
        }
        if(isCorrectQ3){
          setMessageQ3("正解！")
        }
        if(isCorrectQ4){
          setMessageQ4("正解！")
        }
      };

      fetch();
    }, [])

  //const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const navigate = useNavigate();

  const cardClickQ1 = (index) => {
    if(!isCorrectQ1){
      if(index !== nextIndexQ1){
        setMessageQ1("探索する順番が違います");
        return;
      }

    const newFlipped = [...flipped];
    newFlipped[index] = true;
    setFlipped(newFlipped);

    if(cardsQ1[index] === card03){
      setMessageQ1("正解！");
      setIsCorrectQ1(true);
     }else{
      setMessageQ1("");
     }
     
    setNextIndexQ1(nextIndexQ1 + 1);

    }
  }

  const cardClickQ2 = (index) => {
    if(!isCorrectQ2){
      if(index === 2){
        setMessageQ2("正解！");
        setIsCorrectQ2(true);
      }else{
        setMessageQ2("違います");
      }
    }
  }

  const q3answerCheck = () => {
    if(!isCorrectQ3){
      if(answerQ3.includes("4")){
        setMessageQ3("正解！");
        setIsCorrectQ3(true);
      }else{
        setMessageQ3("違います");
      }
    }
  }

  const q4answerCheck = () => {
    const normalized4_2 = answerQ4_2.replace(/\s/g, "");
    const normalized4_3 = answerQ4_3.replace(/\s/g, "");
    const q4_2 = normalized4_2.includes("result←i");
    const q4_3 = normalized4_3.includes("i←i+1");

    if(!isCorrectQ4){
      let msg = "";
      if(!answerQ4_1.includes("かつ")){
        msg+="(a)";
      }
      if(!q4_2){
        msg+="(b)";
      }
      if(!q4_3){
        msg+="(c)";
      }
      msg+="が違います";
      if(answerQ4_1.includes("かつ") && q4_2 && q4_3){
        msg="正解！";
        setIsCorrectQ4(true);
      }
      setMessageQ4(msg);
    }
  }

  async function addCom(){
    const arrayRef = doc(db, "algorithms", "bZeSHUU8RgXeTbVTaQ64");
    await updateDoc(arrayRef, {
    comes: arrayUnion(newCom)
    });
    setNewCom("");
    window.location.reload();
  }

  return(
    <>
    <div className="liPraRoot">
      <div className="liPraContainer">
        <div className="liQuestion1">
          <h3>問1</h3>
          <p>以下の並べられたカードの中から3のカードを左から線形探索を使って見つけなさい。（カードをクリックで探索）</p>
          <div className="liQ1figure">
            {
              cardsQ1.map((card, index) => (
                <img 
                src={flipped[index] ? card : cardBack}
                className="liQ1Image"
                alt={`${index + 1}枚目のカード`}
                onClick={() => cardClickQ1(index)}
                />
              ))}
              {messageQ1.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ1}</h3> : <p style={{color : "red"}}>{messageQ1}</p>}
          </div>
        </div>
        {isCorrectQ1 && (
         <div className="liQuestion2">
           <h3>問2</h3>
           <p>以下の並べられたカードを左から線形探索をしていくと3回目の探索ではどのカードが探索されますか（カードをクリックで回答）</p>
           <div className="liQ2figure">
             {
              cardsQ2.map((card, index) => (
                <img 
                src={card}
                className="liQ2Image"
                alt={`${index + 1}枚目のカード`}
                onClick={() => cardClickQ2(index)}
                />
              ))}
              {messageQ2.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ2}</h3> : <p style={{color : "red"}}>{messageQ2}</p>}
           </div> 
         </div>
        )}
        {isCorrectQ2 && (
          <div className="liQuestion3">
            <h3>問3</h3>
            <p>以下の並べられたカードを左から線形探索すると1のカードは何回目の探索で見つけられますか</p>
            <div className="liQ3figure">
              {
                cardsQ3.map((card, index) => (
                  <img
                  src={card}
                  className="liQ3Image"
                  alt={`${index + 1}枚目のカード`}
                  />
                ))
              }
            </div>
            <div className="liQ3Answer">
              <select value={answerQ3} onChange={(e) => setAnswerQ3(e.target.value)}>
                <option value="">回答を選択</option>
                {
                  cardsQ3.map((card, index) =>(
                    <option value={index + 1}>{index + 1}回目</option>
                  ))
                }
              </select>
              <button onClick={q3answerCheck}>回答する</button>
              {messageQ3.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ3}</h3> : <p style={{color : "red"}}>{messageQ3}</p>}
              {messageQ3.includes("正解！") && localStorage.getItem('mode') === 'a' ? <p>ホームに戻りアンケートに回答した後、次のアルゴリズムを学習しましょう。</p> : <p></p>}
            </div>  
          </div>
        )}
        {isCorrectQ3 && localStorage.getItem('mode') === 'b' && (
          <div className="liQuestion4">
            <h3>問4</h3>
            <p>以下のプログラムはarrayに線形探索を行いtargetと同じ値が存在すればその要素が何番目かを出力し、見つからなければ -1 を出力する。プログラム中の(a)にあてまはるものを選択肢から選び、(b)(c)に入るコードを書きなさい。要素番号は1から始まるものとする。</p>
            <div className="liQ4Code">
              <p>整数型の配列:&ensp;array ← {"{10, 3, 15, 4, 1, 11, 7, 18}"}</p>
              <p>整数型:&ensp;target ← 11</p>
              <p>整数型:&ensp;i ← 1</p>
              <p>整数型:&ensp;result ← -1</p>
              <p>while&ensp;(iがarrayの要素数以下 <span>(a)</span> resultが-1)</p>
              <p>&ensp;&ensp;if&ensp;(array[i]がtargetと同じならば)</p>            
              <p>&ensp;&ensp;&ensp;&ensp;<span>(b)</span></p>   
              <p>&ensp;&ensp;endif</p>
              <p>&ensp;&ensp;<span>(c)</span></p>
              <p>endwhile</p>
              <p>print(result)</p>
            </div>
            <div className="liQ4Answer">
              <select value={answerQ4_1} onChange={(e) => setAnswerQ4_1(e.target.value)}>
                <option value="">(a)の回答を選択</option>
                <option value="または">または</option>
                <option value="かつ">かつ</option>
              </select>
              <textarea placeholder="(b)の回答を入力"  type='text' onChange={(e) => setAnswerQ4_2(e.target.value)} rows={1} cols={50}/>
              <textarea placeholder="(c)の回答を入力"  type='text' onChange={(e) => setAnswerQ4_3(e.target.value)} rows={1} cols={50}/>
              <button onClick={q4answerCheck}>回答する</button>
              {messageQ4.includes("正解！") ?
              <>
              <h3 className="liQ4AnsMess" style={{color : "green"}}>{messageQ4}</h3> 
              <p>ホームに戻りアンケートに回答した後、次のアルゴリズムを学習しましょう。</p>
              </> 
              : <p className="liQ4AnsMess" style={{color : "red"}}>{messageQ4}</p>}
            </div>
          </div>
        )}
        <div className="linkArea">
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toLinearExplain" onClick={() => navigate("/LinearExplain", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4}})}>解説へ戻る</p>
          {localStorage.getItem('mode') === 'b' ? <p className="toLinearCode" onClick={() => navigate("/LinearCode", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4}})}>疑似言語での実装へ戻る</p> : <p></p>}
        </div>
      </div> 
      <div className="liComContainer">
        <div className="liPrcom">
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

export default LinearPractice
