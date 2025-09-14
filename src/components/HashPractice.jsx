import "./HashPractice.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hashQ1 from "../img/hashQ1.jpg" ;
import hashQ2 from "../img/hashQ2.jpg" ;
import hashQ3 from "../img/hashQ3.jpg" ;



function HashPractice(){

  const [answerQ1, setAnswerQ1] = useState("");
  const [answerQ2, setAnswerQ2] = useState("");
  const [answerQ3, setAnswerQ3] = useState("");
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [messageQ1, setMessageQ1] = useState("");
  const [messageQ2, setMessageQ2] = useState("");
  const [messageQ3, setMessageQ3] = useState("");
  const [isCorrectQ1, setIsCorrectQ1] = useState(false);
  const [isCorrectQ2, setIsCorrectQ2] = useState(false);
  const [isCorrectQ3, setIsCorrectQ3] = useState(false);

  const navigate = useNavigate();

  const answerCheckQ1 = () => {
    if(!isCorrectQ1){
      if(answerQ1.includes("5")){
        setMessageQ1("正解！");
        setIsCorrectQ1(true);
      }else{
        setMessageQ1("違います")
      }
    }
  }

  const answerCheckQ2 = () => {
    if(!isCorrectQ2){
      if(answerQ2.includes("4")){
        setMessageQ2("正解！");
        setIsCorrectQ2(true);
      }else{
        setMessageQ2("違います")
      }
    }
  }

  const answerCheckQ3 = () => {
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
    <div className="haPraRoot">
      <div className="haPraContainer">
        <div className="haQuestion1">
          <h3>問1</h3>
          <p>以下のハッシュ表に5を格納する時、格納される番号を答えなさい。ハッシュ関数は7で割った余りとし、衝突が発生した場合はオープンアドレス法の線形探査を用いなさい。</p>
          <div className="haQ1Figure">
            <img  src={hashQ1} className="haQ1Image" alt="ハッシュ法Q1" />
          </div>
          <div className="haQ1Answer">
            <select value={answerQ1} onChange={(e) => setAnswerQ1(e.target.value)}>
              <option value="">回答を選択</option>
              {nums.filter((num) => num < 7)
                .map((num) => (
                  <option value={num}>{num}</option>
              ))}
            </select>
            <button onClick={answerCheckQ1}>回答する</button>
            {messageQ1.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ1}</h3> : <p style={{color : "red"}}>{messageQ1}</p>}
          </div> 
        </div>
        {isCorrectQ1 && (
          <div className="haQuestion2">
            <h3>問2</h3>
            <p>以下のハッシュ表に82格納する時、格納される番号を答えなさい。ハッシュ関数は10で割った余りとし、衝突が発生した場合はオープンアドレス法の線形探査を用いなさい。</p>
            <div className="haQ2Figure">
              <img  src={hashQ2} className="haQ2Image" alt="ハッシュ法Q2" />
            </div>
            <div className="haQ2Answer">
              <select value={answerQ2} onChange={(e) => setAnswerQ2(e.target.value)}>
                <option value="">回答を選択</option>
                {nums.map((num) => (
                  <option value={num}>{num}</option>
                ))}
              </select>
              <button onClick={answerCheckQ2}>回答する</button>
              {messageQ2.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ2}</h3> : <p style={{color : "red"}}>{messageQ2}</p>}
            </div>
          </div>  
        )}
        {isCorrectQ2 && (
          <div className="haQuestion3">
            <h3>問3</h3>
            <p>以下のハッシュ表から43を探索する時何回の探索で見つけることができますか。ハッシュ関数は10で割った余りとし、衝突が発生した場合はオープンアドレス法の線形探査を用いなさい。</p>
            <div className="haQ3Figure">
              <img  src={hashQ3} className="haQ3Image" alt="ハッシュ法Q3" />
            </div>
            <div className="haQ3Answer">
              <select value={answerQ3} onChange={(e) => setAnswerQ3(e.target.value)}>
                <option value="">回答を選択</option>
                {nums.map((num) => (
                  <option value={num}>{num}</option>
                ))}
              </select>
              <button onClick={answerCheckQ3}>回答する</button>
              {messageQ3.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ3}</h3> : <p style={{color : "red"}}>{messageQ3}</p>}
            </div>
          </div>

        )}
        <div className="linkArea">
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toLinearExplain" onClick={() => navigate("/HashExplain")}>解説へ戻る</p>
        </div>
      </div>  
    </div>    
        
    </>
    )
}

export default HashPractice
