import './LinearExplain.css'
import { useNavigate } from "react-router-dom";
import lifig1 from "../img/lifig1.JPG" 
import lifig2 from "../img/lifig2.JPG" 
import lifig3 from "../img/lifig3.JPG" 
import lifig4 from "../img/lifig4.JPG" 

function LinearExplain() {
  const navigate = useNavigate();

  return (
    <>
    <div className="linearRoot">
      <div className="liContainer">
        <div className="liExplain">
          <h2>線形探索</h2>
          <p>線形探索は並べられたデータを先頭から順番に調べていく方法です。例えば0~9の数字が書かれたカードの中からランダムに5枚選んで並べ、この中から7のカードを探す時を考えます。
             まず一番左のカードをめくります。7でなかったら次のカードをめくります。これも7でなかったらその次のカードをめくる...というように順番に調べていきます。
          </p>
          <div className="linearFigure">
            <img src={lifig1} className="image" alt="一回目の探索" />
            <p>一回目の探索</p>
            <img src={lifig2} className="image" alt="二回目の探索" />
            <p>二回目の探索</p>
            <img src={lifig3} className="image" alt="三回目の探索" />
            <p>三回目の探索</p>
            <img src={lifig4} className="image" alt="四回目の探索" />
            <p>四回目の探索</p>
          </div>
          <p>今回の例では4回目の探索で7のカードを見つけたため、探索回数は4回となります。線形探索では、目的のデータが先頭にあれば1回で見つかるのに対し、最後にある場合はデータの数と同じ回数探す必要があります。
          つまりデータの数がn個のとき最大の探索回数はn回となり、データが多いと探索回数も多くなるという特徴があります。</p>
        </div>      
        <div className='linkArea'>
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toLinearPractice" onClick={() => navigate("/LinearPractice")}>問題を解く⇒</p>
        </div> 
      </div>
    </div>
    </>
  )
}

export default  LinearExplain