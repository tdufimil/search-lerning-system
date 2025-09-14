import "./BinaryExplain.css"
import { useNavigate } from "react-router-dom";
import bifig1 from "../img/bifig1.JPG" 
import bifig2 from "../img/bifig2.JPG" 
import bifig3 from "../img/bifig3.JPG" 


function LinearExplain() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="binaryRoot">
        <div className="biContainer">
          <div className="biExplain">
            <h2>二分探索</h2>
            <p>二分探索は小さい順または大きい順に整列された状態のデータにのみ使うことができます。探索の考え方は、「探索範囲の真ん中のデータを調べる、目的のデータとの大小を比較する、必要な側だけを残して範囲を半分にする」
               という流れを繰り返します。
               例えば0~20の数字が書かれたカードの中からランダムに7枚選び小さい順に並べた中から13が書かれたカードを探すとします。
            </p>
            <div className="binaryFigure">
              <img src={bifig1} className="binaryImage" alt="一回目の探索" />
              <p>まず全体の中央のカード（4枚目）をめくります。13よりも小さいカードであるため13は右半分にあることが分かります。</p>
              <img src={bifig2} className="binaryImage" alt="二回目の探索" />
              <p>次に右半分の中から真ん中のカード（6枚目）をめくります。これは13より大きいので、探すカードはその左側にあることが分かります。</p>
              <img src={bifig3} className="binaryImage" alt="三回目の探索" />
              <p>次に5枚目のカードをめくります。13のカードが見つかったため探索は成功です。</p>
            </div>
            <p>このように二分探索は「中央を調べ → 範囲を半分に絞る」という手順を繰り返す方法です。整列されている必要はありますが、データ数が多いときでも線形探索より少ない回数で探すことができ効率的な探索方法だといえます。</p>
          </div>
          <div className="linkArea">
            <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
            <p className="toBinaryPractice" onClick={() => navigate("/BinaryPractice")}>問題を解く⇒</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default  LinearExplain