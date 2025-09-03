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

function BinaryPractice(){
  const cardsQ1 = [card02, card05, card08, card09, card10];
  const cardsQ2 = [card01, card02, card04, card07, card08, card09];
  const cardsQ3 = [card01, card03, card04, card06, card07, card08, card10];
  const [flipped, setFlipped] = useState(Array(cardsQ1.length).fill(false));
  const [nextIndexQ1, setNextIndexQ1] = useState(2);
  const [answerQ3, setAnswerQ3] = useState("");
  const [messageQ1, setMessageQ1] = useState("");
  const [messageQ2, setMessageQ2] = useState("");
  const [messageQ3, setMessageQ3] = useState("");
  const [isCorrectQ1, setIsCorrectQ1] = useState(false);
  const [isCorrectQ2, setIsCorrectQ2] = useState(false);
  const [isCorrectQ3, setIsCorrectQ3] = useState(false);

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
  
    if(cardsQ1[index] === card05){
      setMessageQ1("正解！");
      setIsCorrectQ1(true);
     }else{
      setMessageQ1("");
     }

    if(index === 2){
      setNextIndexQ1(0);
    }else if(index === 0){
      setNextIndexQ1(1);
    }   
    
    }
  }

  const  cardClickQ2 = (index) => {
    if(!isCorrectQ2){
      if(index === 4){
        setMessageQ2("正解！");
        setIsCorrectQ2(true);
      }else{
        setMessageQ2("違います");
      }
    }
  }
  
  const answerCheck = () => {
    if(!isCorrectQ3){
      if(answerQ3.includes("3")){
        setMessageQ3("正解！");
        setIsCorrectQ3(true);
      }else{
        setMessageQ3("違います")
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
            <p>以下の並べられたカードから二分探索で4のカードを探す時何回の探索で見つけることができますか。</p>
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
              <button onClick={answerCheck}>回答する</button>
              {messageQ3.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ3}</h3> : <p style={{color : "red"}}>{messageQ3}</p>}
            </div>    
          </div>  
        )}
        <div className="linkArea">
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toLinearExplain" onClick={() => navigate("/BinaryExplain")}>解説へ戻る</p>
        </div>        
      </div>
    </div>
    </>
  )
}

export default BinaryPractice
