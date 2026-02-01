import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import './Home.css';

{/*ari <p>線形探索</p>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ixIOAf0kL06CbvxAt5p-YWUrbDyN8qtLmjvYfIJZ-g9UQk9NMzVBUDc0VFQ4VFhYM1AwR1NMNkZRUC4u">https://forms.office.com/r/wB2Zc0Lpim</a>
            <p>二分探索</p>
            <a href="https://forms.office.com/r/gSBi260KRr">https://forms.office.com/r/gSBi260KRr</a>
            <p>ハッシュ法</p>
            <a href="https://forms.office.com/r/m8ihnxJ2Hm">https://forms.office.com/r/m8ihnxJ2Hm</a> */}

 {/*nasi b
  <p>線形探索</p>
            <a href="https://forms.office.com/r/63nexUHGBC">https://forms.office.com/r/63nexUHGBC</a>
            <p>二分探索</p>
            <a href="https://forms.office.com/r/V4EmwqjAjN">https://forms.office.com/r/V4EmwqjAjN</a>
            <p>ハッシュ法</p>
            <a href="https://forms.office.com/r/htQbTkzypj">https://forms.office.com/r/htQbTkzypj</a>
  */}           

//  <div className="groupselect">
//           <h3>グループ</h3>
//           <label>グループA</label>
//           <input type='radio' name="group" value='A' onChange={handleRadio}  checked={mode === "a"}/>
//           <label>グループB</label>
//           <input type='radio' name="group" value='B' onChange={handleRadio} checked={mode === "b"}/>      
//         </div>

function Home() {
  const isCorrectQ1 = false;
  const isCorrectQ2 = false;
  const isCorrectQ3 = false;
  const isCorrectQ4 = false;
  const mode = 'a';
  
  console.log(mode);

  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="title">
        <h1>探索アルゴリズム学習システム</h1>
      </header>
      <div className="main">
        <div className="search"> 
          <h3>探索とは</h3>
          <p>探索とは、たくさんのデータの中から目的の情報を探すことです。たとえば、電話帳から名前を探したり、配列から数字を見つけたりするのも探索の一例です。目的のデータが見つかれば「成功」、見つからなければ「失敗」となります。
             このサイトでは代表的な3つの探索アルゴリズムをわかりやすく紹介します。
          </p>
        </div>
        <div className="how">
          <h3>学習の進め方</h3>
          <ol>
            <li>
              1.アルゴリズム一覧からアルゴリズムを選びます。
            </li>
            <li>
              2.解説を読みアルゴリズムの仕組みや特徴を理解します。
            </li>
            <li>
              3.演習問題に取り組み、実際に使いながら理解を深めます。
            </li>
          </ol>
        </div>
       
        <div className="list">
          <h3>アルゴリズム一覧</h3>
          <div className="arg">      
           <div className="sennkei" onClick={() => navigate("/LinearExplain", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>
            <p>線形探索</p>
           </div>            
           <div className="nibu" onClick={() => navigate("/BinaryExplain", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>
             <p>二分探索</p>
           </div>
           <div className="hash" onClick={() => navigate("/HashExplain", { state: {isCorrectQ1,  isCorrectQ2, isCorrectQ3, isCorrectQ4, mode}})}>
             <p>ハッシュ法</p>
           </div>
          </div>   
        </div>
       
      </div>
    </div>
  )
}

export default Home

