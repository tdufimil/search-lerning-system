import "./HashExplain.css"
import hafig1 from "../img/hafig1.JPG" 
import hafig2 from "../img/hafig2.JPG" 
import hafig3 from "../img/hafig3.JPG" 
import hafig4 from "../img/hafig4.JPG" 

import { useNavigate } from "react-router-dom";

function HashExplain() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hashRoot">
        <div className="haContainer">
          <div className="haExplain">
            <h2>ハッシュ法</h2>
            <p>ハッシュ法とはデータを計算式に当てはめ、その結果の位置にデータを格納しておく方法です。この計算式をハッシュ関数、計算して得られた値をハッシュ値といいます。データはハッシュ表と呼ばれる表の中に格納されます。
              探索するときも同じ計算式を使うことで、データがある場所をすぐに特定できます。
            </p>
            <div className="hashFigure">
              <img src={hafig1} className="hashImage1" alt="探索" />
              <p>例えば探し出すデータを31、ハッシュ関数を「データを10で割った余り」だとします。
              31÷10の余りは1であるためハッシュ表の1番を探索します。31を見つけることができたため探索成功です。</p>
              <img src={hafig2} className="hashImage1" alt="衝突" />
              <p>次に42を格納してみます。42÷10の余りは2であるためハッシュ表の2番を調べます。しかしハッシュ表の2番はすでに82が格納されています。このように異なるデータが同じハッシュ値を生成してしまうことを
              衝突といいます。衝突が起きた時の対処法としてチェイン法とオープンアドレス法があります。</p>
              <img src={hafig3} className="hashImage2" alt="チェイン法" />
              <img src={hafig4} className="hashImage2" alt="オープンアドレス法" style={{marginLeft : "5%"}} />
              <p>チェイン法は同じ場所に複数のデータをリストとして管理する方法です。一方でオープンアドレス法は空き場所が見つかるまで新しいハッシュ値を計算して格納する方法です。例えばハッシュ値に+1をして空き場所を探す線形探査を用いてみます。すると
                2+1より3番を調べます。3番は空いているため42は3番に格納されます。もし3番も埋まっていたら、4番 → 5番… と順に調べ、最初に見つけた空き場所に入れます。オープンアドレス法には他にも別のハッシュ関数を使う二重ハッシュという方法もあります。</p>
            </div>
          </div>
          <div className="linkArea">
            <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
            <p className="toHashPractice" onClick={() => navigate("/HashPractice")}>問題を解く⇒</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default  HashExplain