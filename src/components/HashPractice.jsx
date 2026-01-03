import "./HashPractice.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect} from 'react';
import {db} from "../firebase.jsx";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import hashQ1 from "../img/hashQ1.jpg" ;
import hashQ2 from "../img/hashQ2.jpg" ;
import hashQ3 from "../img/hashQ3.jpg" ;
//import haQ4Ans from "../img/haq4ans.jpg";

function HashPractice(){
  const [comArr, setComArr] = useState([]);
  const [newCom, setNewCom] = useState("");
  const location = useLocation();
  const [answerQ1, setAnswerQ1] = useState("");
  const [answerQ2, setAnswerQ2] = useState("");
  const [answerQ3, setAnswerQ3] = useState("");
  const [answerQ4_1, setAnswerQ4_1] = useState("");
  const [answerQ4_2, setAnswerQ4_2] = useState("");
  const [answerQ4_3, setAnswerQ4_3] = useState("");
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
        const ref = db.collection("algorithms").doc("GtjJMbqXODsI7gtOqmcH");
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
      console.log(answerQ3)
      if(answerQ3.includes("4")){
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
      const q4_1 = normalized4_1 == ("calcHash1(value);");
      const q4_2 = normalized4_2 == ("value;");
      const q4_3 = normalized4_3 == ("i;");
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
    const arrayRef = doc(db, "algorithms", "GtjJMbqXODsI7gtOqmcH");
    await updateDoc(arrayRef, {
    comes: arrayUnion(newCom)
    });
    setNewCom("");
    window.location.reload();
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
            <p>以下のハッシュ表から43を探索する時何回目の探索で見つけることができますか。ハッシュ関数は10で割った余りとし、衝突が発生した場合はオープンアドレス法の線形探査を用いなさい。</p>
            <div className="haQ3Figure">
              <img  src={hashQ3} className="haQ3Image" alt="ハッシュ法Q3" />
            </div>
            <div className="haQ3Answer">
              <select value={answerQ3} onChange={(e) => setAnswerQ3(e.target.value)}>
                <option value="">回答を選択</option>
                {nums.map((num) => (
                  <option value={num+1}>{num+1}回目</option>
                ))}
              </select>
              <button onClick={answerCheckQ3}>回答する</button>
              {messageQ3.includes("正解！") ? <h3 style={{color : "green"}}>{messageQ3}</h3> : <p style={{color : "red"}}>{messageQ3}</p>}
              {messageQ3.includes("正解！") && mode !== 'a' ? <p>ホームに戻りアンケートの回答をお願いします</p> : <p></p>}
            </div>
          </div>
        )}
        {isCorrectQ3 && mode === 'a'  && (
          <>
          <div className="haQuestion4">
            <h3>問4</h3>
            <p>以下のプログラムはハッシュ法による探索、格納を行う。関数addは引数valueがarrayに格納できればtrueを返しできなければfalseを返す。また、関数searchは引数valueがarrayに格納されているか探索し格納されていればその要素番号を返し、格納されていなければ
              -1を返す。</p>
            <p>プログラム中の空欄(a)(b)(c)に入るコード答えなさい。</p>
            <div className="haQ4Code">
              <p>int&ensp;calcHash1(int&ensp;value){"{"}</p>
              <p>&ensp;&ensp;return&ensp;value % array.length;</p>
              <p>{"}"}</p>
              <p>&ensp;</p>
              <p>int&ensp;calcHash2(int&ensp;value){"{"}</p>
              <p>&ensp;&ensp;return&ensp;(value + 1) % array.length; </p>
              <p>{"}"}</p>
              <p>&ensp;</p>
              <p>boolean&ensp;add(int&ensp;value){"{"}</p>
              <p>&ensp;&ensp;int&ensp;i = <span>(a)</span></p>
              <p>&ensp;&ensp;if(array[i] == -1){"{"}</p>
              <p>&ensp;&ensp;&ensp;&ensp;array[i] = <span>(b)</span></p>
              <p>&ensp;&ensp;&ensp;&ensp;return&ensp;true;</p>
              <p>&ensp;&ensp;{"}"}</p>
              <p>&ensp;</p>
              <p>&ensp;&ensp;i = calcHash2(value);</p>
              <p>&ensp;&ensp;if(array[i] == -1){"{"}</p>
              <p>&ensp;&ensp;&ensp;&ensp;array[i] = <span>(b)</span></p>
              <p>&ensp;&ensp;&ensp;&ensp;return&ensp;true;</p>
              <p>&ensp;&ensp;{"}"}</p>
              <p>&ensp;&ensp;return false;</p>
              <p>{"}"}</p>
              <p>&ensp;</p>
              <p>int&ensp;search(int&ensp;value){"{"}</p>
              <p>&ensp;&ensp;int&ensp;i = <span>(a)</span></p>
              <p>&ensp;&ensp;if&ensp;(array[i] == value){"{"}</p>
              <p>&ensp;&ensp;&ensp;&ensp;return&ensp;<span>(c)</span></p>
              <p>&ensp;&ensp;{"}"}</p>
              <p>&ensp;</p>
              <p>&ensp;&ensp;i = calcHash2(value);</p>
              <p>&ensp;&ensp;if&ensp;(array[i] == value){"{"}</p>
              <p>&ensp;&ensp;&ensp;&ensp;return&ensp;<span>(c)</span></p>
              <p>&ensp;&ensp;{"}"}</p>
              <p>&ensp;&ensp;return&ensp;-1;</p>
              <p>{"}"}</p>
              <p>&ensp;</p>
              <p>void&ensp;test(){"{"}</p>
              <p>&ensp;&ensp;array = new int[]{"{-1, -1, -1, -1, -1, -1, -1}"}</p>
              <p>&ensp;&ensp;println(add(2));</p>
              <p>&ensp;&ensp;println(add(3));</p>
              <p>&ensp;&ensp;println(add(8));</p>
              <p>&ensp;&ensp;println(add(9));</p>
              <p>&ensp;&ensp;println(search(0));</p>
              <p>&ensp;&ensp;println(search(3));</p>
              <p>&ensp;&ensp;println(search(8));</p>
              <p>{"}"}</p>
              <p>&ensp;</p>
              <p>testを実行した結果:</p>
              <p>true</p>
              <p>true</p>
              <p>true</p>
              <p>false</p>
              <p>-1</p>
              <p>3</p>
              <p>1</p>
            </div>
            <div className="haQ4Answer">
              <textarea className="biQ4_1" placeholder="(a)の回答を入力"  type='text' onChange={(e) => setAnswerQ4_1(e.target.value)} rows={1} cols={50}/>
              <textarea placeholder="(b)の回答を入力"  type='text' onChange={(e) => setAnswerQ4_2(e.target.value)} rows={1} cols={50}/>
              <textarea placeholder="(c)の回答を入力"  type='text' onChange={(e) => setAnswerQ4_3(e.target.value)} rows={1} cols={50}/>
              <button onClick={q4answerCheck}>回答する</button>
              {messageQ4.includes("正解！") ? 
               <>
               <h3 className="haQ4AnsMess" style={{color : "green"}}>{messageQ4}</h3>
               <p className="haQ4LastMess">ホームに戻りアンケートの回答をお願いします</p>
               </>
               : <p className="haQ4AnsMess" style={{color : "red"}}>{messageQ4}</p>
               }
            </div>
          </div>
          </>
        )}
        <div className="linkArea">
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toHashExplain" onClick={() => navigate("/HashExplain", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>解説へ戻る</p>
          <p className="toHashCode" onClick={() => navigate("/HashCode", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>疑似言語での実装へ戻る</p>
          
        </div>
      </div>  
      <div className="haComContainer">
        <div className="haPrcom">
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

export default HashPractice
