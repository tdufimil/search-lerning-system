import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="title">
        <h1>探索アルゴリズム学習システム</h1>
      </header>
      <div className="main">
        <div className="search"> 
          <h3>探索とは</h3>
          <p>探索とは表やリスト、配列などの複数のデータが格納されているデータ構造の中から目的のデータを探し出す操作です。目的のデータを見つけることができれば探索成功、見つからなければ探索失敗となります。本サイトでは代表的な三つの探索アルゴリズムを紹介します。
          </p>
        </div>
        <div className="how">
          <h3>学習の進め方</h3>
          <ol>
            <li>
              1.アルゴリズム一覧から学びたいアルゴリズムを選択する
            </li>
            <li>
              2.解説を読みアルゴリズムの振る舞いや概要を理解する
            </li>
            <li>
              3.演習問題を解き理解を深める
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
      </div>
    </div>
  )
}

export default Home
