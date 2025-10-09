import './LinearExplain.css';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
// import lifig1 from "../img/lifig1.JPG" 
// import lifig2 from "../img/lifig2.JPG" 
// import lifig3 from "../img/lifig3.JPG" 
// import lifig4 from "../img/lifig4.JPG" 
import cardBack from "../img/cardBack.jpg" ;
import card02 from "../img/card02.jpg" ;
import card03 from "../img/card03.jpg" ;
import card05 from "../img/card05.jpg" ;
import card06 from "../img/card06.jpg" ;
import card07 from "../img/card07.jpg" ;


function LinearExplain() {
  
  const [nextIndex, setNextIndex] = useState(0);
  const cards = [card05,card03,card02,card07,card06];
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
  const [text, setText] = useState("まず一番左のカードをクリックしてめくってみてください。");
  const navigate = useNavigate();

  const cardClick = (index) => {
    if(nextIndex === index && nextIndex <= 3){
      const newFlipped = [...flipped];
      newFlipped[index] = true;
      setFlipped(newFlipped);
      setNextIndex(nextIndex + 1);

      if(nextIndex === 0){
        setText("7のカードではありませんでしたので隣のカードを調べましょう。");
      }else if(nextIndex === 1){
       setText("これも7のカードではありませんでしたのでさらに隣のカードを調べましょう。"); 
      }else if(nextIndex === 2){
        setText("同じように7のカードを見つけるまで隣のカードを調べましょう。");
      }else if(nextIndex === 3){
        setText("7のカードを見つけたので探索終了です。");
      }
    }

  }

  return (
    <>
    <div className="linearRoot">
      <div className="liContainer">
        <div className="liExplain">
          <h2>線形探索</h2>
          <p>線形探索は並べられたデータを先頭から順番に調べていく方法です。例えば0~9の数字が書かれたカードの中からランダムに5枚選んで並べ、この中から7のカードを探す時を考えます。</p>
          <p>{text}</p>
          <div className="linearFigure">
            {cards.map((card, index) => (
              <img 
              src={flipped[index] ? card : cardBack}
              className="image"
              alt={`${index + 1}枚目のカード`}
              onClick={() => cardClick(index)}
              />
              ))}
          </div>
          {nextIndex >= 4 && ( 
            <p>今回の例では4回目の探索で7のカードを見つけたため、探索回数は4回となります。線形探索では、目的のデータが先頭にあれば1回で見つかるのに対し、最後にある場合はデータの数と同じ回数探す必要があります。
            つまりデータの数がn個のとき最大の探索回数はn回となり、データが多いと探索回数も多くなるという特徴があります。続いて線形探索を疑似言語で実装してみましょう。</p>
          )}
        </div>
        <div className='linkArea'>
          <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
          <p className="toLinearCode" onClick={() => navigate("/LinearCode")}>疑似言語で実装する⇒</p>
        </div> 
      </div>
    </div>
    </>
  )
}

export default  LinearExplain
