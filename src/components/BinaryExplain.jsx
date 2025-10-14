import "./BinaryExplain.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 
import cardBack from "../img/cardBack.jpg" ;
import card01 from "../img/card01.jpg" ;
import card02 from "../img/card02.jpg" ;
import card03 from "../img/card03.jpg" ;
import card09 from "../img/card09.jpg" ;
import card13 from "../img/card13.jpg" ;
import card18 from "../img/card18.jpg" ;


function LinearExplain() {
  const [nextIndex, setNextIndex] = useState(3);
  const cards = [card01,card02,card03,card09,card13,card18,card01];
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));
  const [text, setText] = useState("まず全体の中央のカード（4枚目）をめくります。");
  const [islast, setIsLast] = useState(false);
  const navigate = useNavigate();
  
  const cardClick = (index) => {
    if(nextIndex === index){
      const newFlipped = [...flipped];
      newFlipped[index] = true;
      setFlipped(newFlipped);
      
      if(nextIndex === 3){
        setText("13よりも小さいカードであるため13は右半分にあることが分かります。次に右半分の中から真ん中のカード（6枚目）をめくります。");
        setNextIndex(5);
      }else if(nextIndex === 5){
       setText("これは13より大きいので、探すカードはその左側にあることが分かります。次に5枚目のカードをめくります。");
       setNextIndex(4); 
      }else if(nextIndex === 4){
        setText("13のカードが見つかったため探索は成功です。");
        setIsLast(true);
      }

    }
  }

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
            <p>{text}</p>
            <div className="binaryFigure">
              {cards.map((card, index) => (
                <img 
                src={flipped[index] ? card : cardBack}
                className="binaryImage"
                alt={`${index + 1}枚目のカード`}
                onClick={() => cardClick(index)}
                />
              ))}
            </div>
            {islast && (
             <p>このように二分探索は「中央を調べ → 範囲を半分に絞る」という手順を繰り返す方法です。整列されている必要はありますが、データ数が多いときでも線形探索より少ない回数で探すことができ効率的な探索方法だといえます。</p>
            )}
            
          </div>
          <div className="linkArea">
            <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
            <p className="toBinaryCodea" onClick={() => navigate("/BinaryCode")}>疑似言語で実装する⇒</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default  LinearExplain