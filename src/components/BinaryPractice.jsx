import "./BinaryPractice.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import biq4ans from "../img/biq4ans.jpg" ;

function BinaryPractice(){
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const cardsQ1 = [card02, card05, card08, card09, card10];
  const cardsQ2 = [card01, card02, card04, card07, card08, card09];
  const cardsQ3 = [card01, card03, card04, card06, card07, card08, card10];
  const [flipped, setFlipped] = useState(Array(cardsQ1.length).fill(false));
  const [numQ1, setNumQ1] = useState(1);
  let isOk = false;
  const [answerQ3, setAnswerQ3] = useState("");
  const [answerQ4_1, setAnswerQ4_1] = useState("");
  const [answerQ4_2, setAnswerQ4_2] = useState("");
  const [messageQ1, setMessageQ1] = useState("");
  const [messageQ2, setMessageQ2] = useState("");
  const [messageQ3, setMessageQ3] = useState("");
  const [messageQ4, setMessageQ4] = useState("");
  const [isCorrectQ1, setIsCorrectQ1] = useState(false);
  const [isCorrectQ2, setIsCorrectQ2] = useState(false);
  const [isCorrectQ3, setIsCorrectQ3] = useState(false);
  const [isCorrectQ4, setIsCorrectQ4] = useState(false);
  

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
      if(answerQ4_1.includes("2") && answerQ4_2.includes("6")){
        setMessageQ4("正解！");
        setIsCorrectQ4(true);
      }else if(!answerQ4_1.includes("2") && answerQ4_2.includes("6")){
        setMessageQ4("(a)(b)の組み合わせが違います")
      }else if(answerQ4_1.includes("2") && !answerQ4_2.includes("6")){
        setMessageQ4("実行結果が違います")
      }else{
        setMessageQ4("どちらも違います")
      }
    }
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
            </div>    
          </div>  
        )}
        {isCorrectQ3 && (
          <>
          <div className="biQuestion4">
            <h3>問4</h3>
            <p>以下のプログラムはarrayに二分探索を行いtargetと同じものがあればその要素が何番目かを出力し、見つからなければ-1を出力する。プログラム中の(a)と(b)に入る正しい組み合わせを選択肢から選んで答えなさい。また、実行結果を答えなさい。要素番号は1から始まるものとする。</p>
            <div className="biQ4Code">
              <p>整数型の配列:&ensp;array ← {"{1, 4, 5, 9, 11, 15, 17, 18}"}</p>
              <p>整数型:&ensp;target ← 15</p>
              <p>整数型:&ensp;result ← -1</p>
              <p>整数型:&ensp;left ← 1</p>
              <p>整数型:&ensp;right ← arrayの要素数</p>
              <p>整数型:&ensp;mid</p>
              <p>&ensp;</p>
              <p>while&ensp;(leftがright以下 かつ resultが-1)</p>
              <p>&ensp;&ensp;mid ← (left+right)/2</p>            
              <p>&ensp;&ensp;if&ensp;(array[mid]がtargetと同じならば)</p>   
              <p>&ensp;&ensp;&ensp;&ensp;result ← mid</p>
              <p>&ensp;&ensp;endif</p>
              <p>&ensp;&ensp;if&ensp;(array[mid]がtargetよりも大きいならば)</p>
              <p>&ensp;&ensp;&ensp;&ensp;right ← (a)</p>
              <p>&ensp;&ensp;endif</p>
              <p>&ensp;&ensp;if&ensp;(array[mid]がtargetよりも小さいならば)</p>
              <p>&ensp;&ensp;&ensp;&ensp;left ← (b)</p>
              <p>&ensp;&ensp;endif</p>
              <p>endwhile</p>
              <p>&ensp;</p>
              <p>print(result)</p>
            </div>
            <div className="biQ4Answer">
               <p>選択肢</p>
               <img src={biq4ans} className="biQ4Image" alt="選択肢" />
               <select value={answerQ4_1} onChange={(e) => setAnswerQ4_1(e.target.value)}>
                 <option value="">組み合わせを選択</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
               </select>
               <select value={answerQ4_2} onChange={(e) => setAnswerQ4_2(e.target.value)}>
                 <option value="">実行結果を選択</option>
                   {nums.map((num) => (
                     <option value={num}>{num}</option>
                   ))}
               </select>
               <button onClick={q4answerCheck}>回答する</button>
               {messageQ4.includes("正解！") ? <h3 className="biQ4AnsMess" style={{color : "green"}}>{messageQ4}</h3> : <p className="biQ4AnsMess" style={{color : "red"}}>{messageQ4}</p>}
            </div>
          </div>
          </>
        )}
        <div className="linkArea">
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toBinaryExplain" onClick={() => navigate("/BinaryExplain")}>解説へ戻る</p>
          <p className="toBinaryCode" onClick={() => navigate("/BinaryCode")}>疑似言語での実装へ戻る</p>
        </div>        
      </div>
    </div>
    </>
  )
}

export default BinaryPractice
