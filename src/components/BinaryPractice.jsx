import "./BinaryPractice.css";
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
import card09 from "../img/card09.jpg" ;
import card10 from "../img/card10.jpg" ;
//import biq4ans from "../img/biq4ans.jpg" ;

function BinaryPractice(){
  const [comArr, setComArr] = useState([]);
  const [newCom, setNewCom] = useState("");
  const location = useLocation();
  const cardsQ1 = [card02, card05, card08, card09, card10];
  const cardsQ2 = [card01, card02, card04, card07, card08, card09];
  const cardsQ3 = [card01, card03, card04, card06, card07, card08, card10];
  const [flipped, setFlipped] = useState(Array(cardsQ1.length).fill(false));
  const [numQ1, setNumQ1] = useState(1);
  let isOk = false;
  const [answerQ3, setAnswerQ3] = useState("");
  const [answerQ4_1, setAnswerQ4_1] = useState("");
  const [answerQ4_2, setAnswerQ4_2] = useState("");
  const [answerQ4_3, setAnswerQ4_3] = useState("");
  const [messageQ1, setMessageQ1] = useState("");
  const [messageQ2, setMessageQ2] = useState("");
  const [messageQ3, setMessageQ3] = useState("");
  const [messageQ4, setMessageQ4] = useState("");
  const [isCorrectQ1, setIsCorrectQ1] = useState(location.state.isCorrectQ1);
  const [isCorrectQ2, setIsCorrectQ2] = useState(location.state.isCorrectQ2);
  const [isCorrectQ3, setIsCorrectQ3] = useState(location.state.isCorrectQ3);
  const [isCorrectQ4, setIsCorrectQ4] = useState(location.state.isCorrectQ4);
  const mode = location.state.mode;


  useEffect(() => {
      const fetch = async () => {
        const ref = db.collection("algorithms").doc("pyfwRJRVYPQfZWuB2rBh");
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
      if(numQ1 === 1 && index === 2){
        isOk = true;
        setNumQ1(2);
      }else if(numQ1 === 2 && index === 0 || numQ1 === 2 && index === 1){
        isOk = true;
        setNumQ1(3);
      }else if(numQ1 === 3 && index === 1){
        isOk = true;
      }else{
        isOk = false;
      }

      if(!isOk){
        setMessageQ1("探索する順番が違います");
        return;
      }
  
    const newFlipped = [...flipped];
    newFlipped[index] = true;
    setFlipped(newFlipped);
  
    if(cardsQ1[index] === card05){
      setMessageQ1("正解！");
      setIsCorrectQ1(true);
     }else{
      setMessageQ1("");
     }
    }
  }

  const  cardClickQ2 = (index) => {
    if(!isCorrectQ2){
      if(index === 4 || index === 5){
        setMessageQ2("正解！");
        setIsCorrectQ2(true);
      }else{
        setMessageQ2("違います");
      }
    }
  }
  
  const q3answerCheck = () => {
    if(!isCorrectQ3){
      if(answerQ3.includes("3")){
        setMessageQ3("正解！");
        setIsCorrectQ3(true);
      }else{
        setMessageQ3("違います")
      }
    }
  }
  
  const q4answerCheck = () => {
    if(!isCorrectQ4){
      const normalized4_1 = answerQ4_1.replace(/\s/g, "");
      const normalized4_2 = answerQ4_2.replace(/\s/g, "");
      const normalized4_3 = answerQ4_3.replace(/\s/g, "");
      const q4_1 = normalized4_1 ==("(left+right)/2;");
      const q4_2 = normalized4_2 == ("mid-1;");
      const q4_3 = normalized4_3 == ("mid+1;");

      let msg = "";
      if(!q4_1){
        msg+="(a)";
      }
      if(!q4_2){
        msg+="(b)";
      }
      if(!q4_3){
        msg+="(c)";
      }
      msg+="が違います";
      if(q4_1 && q4_2 && q4_3){
        msg="正解！";
        setIsCorrectQ4(true);
      }
      setMessageQ4(msg);
    }
  }

  async function addCom(){
    const arrayRef = doc(db, "algorithms", "pyfwRJRVYPQfZWuB2rBh");
    await updateDoc(arrayRef, {
    comes: arrayUnion(newCom)
    });
    setNewCom("");
    window.location.reload();
  }  

  return(
    <>
    <div className="biPraRoot">
      <div className="biPraContainer">
        <div className="biQuestion1">
          <h3>問1</h3>
          <p>以下の左から小さい順に並べられたカードの中から5のカードを二分探索を使って見つけなさい。（カードをクリックで探索）</p>
          <div className="biQ1Figure">
            {cardsQ1.map((card, index) => (
              <img 
              src={flipped[index] ? card : cardBack}
              className="biQ1Image"
              alt={`${index + 1}枚目のカード`}
              onClick={() => cardClickQ1(index)}
              />
            ))}
            {messageQ1.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ1}</h3> : <p style={{color : "red"}}>{messageQ1}</p>}
          </div>
        </div>
        {isCorrectQ1 && (
          <div className="biQuestion2">
            <h3>問2</h3>
            <p>以下の並べられたカードの中から9のカードを二分探索で探索するとき二回目に探索されるカードはどれですか</p>
            <div className="biQ2Figure">
              {cardsQ2.map((card, index) => (
              <img 
              src={card}
              className="biQ2Image"
              alt={`${index + 1}枚目のカード`}
              onClick={() => cardClickQ2(index)}
              />
              ))}  

              {messageQ2.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ2}</h3> : <p style={{color : "red"}}>{messageQ2}</p>}
            </div>
          </div>  
        )}
        {isCorrectQ2 && (
          <div className="biQuestion3">
            <h3>問3</h3>
            <p>以下の並べられたカードから二分探索で4のカードを探す時何回目の探索で見つけることができますか。</p>
            <div className="biQ3Figure">
              {cardsQ3.map((card, index) => (
                <img
                src={card}
                className="liQ3Image"
                alt={`${index + 1}枚目のカード`}
                />
                ))}
            </div>
            <div className="biQ3Answer">
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
              {messageQ3.includes("正解！") && mode !== 'a' ? <p>ホームに戻りアンケートに回答した後、次のアルゴリズムを学習しましょう。</p> : <p></p>}
            </div>    
          </div>  
        )}
        {isCorrectQ3 &&  mode === 'a' && (
          <>
          <div className="biQuestion4">
            <h3>問4</h3>
            <p>以下のプログラムはarrayに二分探索を行いtargetと同じ値が存在すればその要素が何番目かを出力し、見つからなければ-1を出力する。プログラム中の(a)(b)(c)に入るコード答えなさい。</p>
            <div className="biQ4Code">
              <p>int[]&ensp;array = {"{1, 4, 5, 9, 11, 15, 17, 18}"};</p>
              <p>int&ensp;target = 15;</p>
              <p>int&ensp;result = -1;</p>
              <p>int&ensp;left = 0;</p>
              <p>int&ensp;right = array.length - 1;</p>
              <p>int&ensp;mid;</p>
              <p>&ensp;</p>
              <p>while&ensp;(left {"<="} right && result == -1){"{"}</p>
              <p>&ensp;&ensp;mid = <span>(a)</span></p>            
              <p>&ensp;&ensp;if&ensp;(array[mid] == target){"{"}</p>   
              <p>&ensp;&ensp;&ensp;&ensp;result = mid;</p>
              <p>&ensp;&ensp;{"}"}</p>
              <p>&ensp;&ensp;if&ensp;(array[mid] {">"} target){"{"}</p>
              <p>&ensp;&ensp;&ensp;&ensp;right = <span>(b)</span></p>
              <p>&ensp;&ensp;{"}"}</p>
              <p>&ensp;&ensp;if&ensp;(array[mid] {"<"} target){"{"}</p>
              <p>&ensp;&ensp;&ensp;&ensp;left = <span>(c)</span></p>
              <p>&ensp;&ensp;{"}"}</p>
              <p>{"}"}</p>
              <p>&ensp;</p>
              <p>printin(result);</p>
            </div>
            <div className="biQ4Answer">
               <textarea className="biQ4_1" placeholder="(a)の回答を入力"  type='text' onChange={(e) => setAnswerQ4_1(e.target.value)} rows={1} cols={50}/>
               <textarea placeholder="(b)の回答を入力"  type='text' onChange={(e) => setAnswerQ4_2(e.target.value)} rows={1} cols={50}/>
               <textarea placeholder="(c)の回答を入力"  type='text' onChange={(e) => setAnswerQ4_3(e.target.value)} rows={1} cols={50}/>
               <button onClick={q4answerCheck}>回答する</button>
               {messageQ4.includes("正解！") ? 
               <>
               <h3 className="biQ4AnsMess" style={{color : "green"}}>{messageQ4}</h3>
               <p>ホームに戻りアンケートに回答した後、次のアルゴリズムを学習しましょう。</p>
               </>
                : <p className="biQ4AnsMess" style={{color : "red"}}>{messageQ4}</p>}
            </div>
          </div>
          </>
        )}
        <div className="linkArea">
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toBinaryExplain" onClick={() => navigate("/BinaryExplain", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>解説へ戻る</p>
          {mode === 'a' ? <p className="toBinaryCode" onClick={() => navigate("/BinaryCode", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>二分探索の実装へ戻る</p> : <p></p>}
          
        </div>        
      </div>
      <div className="biComContainer">
        <div className="biPrcom">
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

export default BinaryPractice
