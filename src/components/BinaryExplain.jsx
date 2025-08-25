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
            <p>二分探索は小さい順または大きい順に整列（ソート）された状態のデータにのみ使うことができます。探索の基本的な考え方は、「探索範囲の中央のデータを確認し、目的のデータとの大小関係を比較して、探索範囲を半分に絞る」
               というものです。これを繰り返すことで効率的にデータを探すことができます。
               例えば0~20の数字が書かれたカードの中からランダムに7枚選ばれ左から小さい順に並べられており、この中から13が書かれたカードを探すとします。
            </p>
            <div className="binaryFigure">
              <img src={bifig1} className="binaryImage" alt="一回目の探索" />
              <p>まず全体の中央のカード（4枚目）をめくります。13よりも小さい数であるため13は右側にあることが分かります。</p>
              <img src={bifig2} className="binaryImage" alt="二回目の探索" />
              <p>次に右側3枚のうちの真ん中のカード（6枚目）をめくります。13よりも大きい数であるためこのカードより右、かつ全体の真ん中（4枚目）より右にあることが分かります。</p>
              <img src={bifig3} className="binaryImage" alt="三回目の探索" />
              <p>次に5枚目のカードをめくります。13のカードが見つかったため探索は成功です。</p>
            </div>
            <p>このように探索範囲の中央のデータを探索し目的のデータと比較して探索範囲を半分に絞っていく方法が二分探索です。二分探索の探索回数は最小の場合で1回、最大の場合はデータの数がn個ならlog₂n回
            となります。整列されている必要がありますが線形探索よりも高速に探索できます。</p>
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