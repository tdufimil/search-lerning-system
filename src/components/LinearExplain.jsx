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
          <p>線形探索は並べられたデータに対し先頭のデータから順番に探索する方法です。例えば0~9の数字が書かれたカードの中からランダムに5枚並べられており、この中から7のカードを探すとします。
          この時まず先頭のカードをめくり7でなかったら次に二枚目をめくります。これも7でなかったら次は三枚目...と順番に調べていきます。
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
          <p>上の図の場合四回目の探索で7のカードを見つけたため探索回数は4回となります。線形探索の探索回数は最小の場合で1回（先頭が目的のデータ）、最大の場合はデータの数と同じ数になります（最後が目的のデータ）。
          そのためデータの数がn個の場合最大の探索回数はn回となりデータが多いと探索回数も多くなります。</p>
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