import { useNavigate } from "react-router-dom";
import './Home.css';
import {db} from "../firebase.jsx";
import { useState, useEffect} from "react";

function Home() {
  const navigate = useNavigate();
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    db.collection("algorithms")
    .onSnapshot((snapshot) => {
      setTitles(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className="home">
      <header className="title">
        <h1>探索アルゴリズム学習システム</h1>
      </header>
      <div className="main">
        <div className="search"> 
          <h3>探索とは</h3>
          <p>探索とは、たくさんのデータの中から目的の情報を探すことです。たとえば、電話帳から名前を探したり、配列（並び順に並べたデータの集まり）から数字を見つけたりするのも探索の一例です。目的のデータが見つかれば「成功」、見つからなければ「失敗」となります。
             このサイトでは代表的な3つの探索アルゴリズムをわかりやすく紹介します。
          </p>
        </div>
        <div className="how">
          <h3>学習の進め方</h3>
          <ol>
            <li>
              1.アルゴリズム一覧から学びたいアルゴリズムを選びます。
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
           <div className="sennkei" onClick={() => navigate("/LinearExplain")}>
            <p>線形探索</p>
           </div>            
           <div className="nibu" onClick={() => navigate("/BinaryExplain")}>
             <p>二分探索</p>
           </div>
           <div className="hash" onClick={() => navigate("/HashExplain")}>
             <p>ハッシュ法</p>
           </div>
          </div>   
        </div>
        <div className="research">
          <h3>アンケート</h3>
          <p>以下のリンクからアンケートの回答をお願いします。</p>
          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ixIOAf0kL06CbvxAt5p-YWUrbDyN8qtLmjvYfIJZ-g9UQk9NMzVBUDc0VFQ4VFhYM1AwR1NMNkZRUC4u">https://forms.office.com/r/wB2Zc0Lpim</a>
        </div>
        <div className="add">
          <h3>その他のアルゴリズム</h3>
          <div className="addAlgo">
            {titles.length === 0 ? <p>nodata</p>:
              titles.map((algo, index) => (<p className="addAlgoTitle" key={index} onClick={() => navigate("/NewAlgorithm", { state: { title: algo.title,  text: algo.text} })}>{algo.title}</p>))
            }
            
          </div>
          <button onClick={() => navigate("/AddAlgorithm")}>追加する</button>
        </div>
      </div>
    </div>
  )
}

export default Home
