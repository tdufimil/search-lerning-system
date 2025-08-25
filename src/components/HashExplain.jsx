import "./HashExplain.css"
import hafig1 from "../img/hafig1.JPG" 
import hafig2 from "../img/hafig2.JPG" 
import { useNavigate } from "react-router-dom";

function HashExplain() {
  const navigate = useNavigate();

  return (
    <>
      <div className="hashRoot">
        <div className="haContainer">
          <div className="haExplain">
            <h2>ハッシュ法</h2>
            <p>ハッシュ法とはデータを計算式に当てはめその結果で得られた値の場所に格納しておく方法です。探索するときも同じ計算式を使い格納されている場所を求めます。
              この格納、探索する時に使う計算式をハッシュ関数、計算で求めた値をハッシュ値といいデータはハッシュ表に格納されます。
            </p>
            <div className="hashFigure">
              <img src={hafig1} className="hashImage" alt="探索" />
              <p>例えば探し出すデータを31、ハッシュ関数が10の余剰（データを10で割った余り）だとします。
              まずハッシュ関数を使いハッシュ値を求めます。31を10で割った余りは1であるためハッシュ表の1番を探索します。31を見つけることができたため探索成功です。</p>
              <img src={hafig2} className="hashImage" alt="衝突" />
              <p>次に42を格納してみます。
              同じようにハッシュ関数を使いハッシュ値を求めると2が求まります。しかしハッシュ表の2番はすでに82が格納されています。このように異なるデータが同じハッシュ値を生成してしまうことを
              衝突といいます。衝突の対処法としてチェイン法とオープンアドレス方があります。チェイン法は同じハッシュ値を持つデータをリストにして管理する方法です。オープンアドレス法は格納できるまで
              別のハッシュ関数でハッシュ値を求め続ける方法です。</p>
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