import "./LinearPractice.css";
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
//import card09 from "../img/card09.jpg" ;
//import card10 from "../img/card10.jpg" ;


function LinearPractice(){
  const cardsQ1 = [card06, card02, card08, card03, card01];
  const cardsQ2 = [cardBack, cardBack, cardBack, cardBack, cardBack, cardBack];
  const cardsQ3 = [card03, card08, card02, card01, card05, card07, card04];
  const [flipped, setFlipped] = useState(Array(cardsQ1.length).fill(false));
  const [nextIndexQ1, setNextIndexQ1] = useState(0);
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

  const answerCheck = () => {
    if(!isCorrectQ3){
      if(answerQ3.includes("4")){
        setMessageQ3("正解！");
        setIsCorrectQ3(true);
      }else{
        setMessageQ3("違います")
      }
    }
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
              <button onClick={answerCheck}>回答する</button>
              {messageQ3.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ3}</h3> : <p style={{color : "red"}}>{messageQ3}</p>}
            </div>  
          </div>
        )}
        <div className="linkArea">
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toLinearExplain" onClick={() => navigate("/LinearExplain")}>解説へ戻る</p>
        </div>
      </div> 
    </div>
    </>
  )
}

export default LinearPractice
