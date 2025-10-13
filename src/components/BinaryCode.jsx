import './BinaryCode.css';
import { useNavigate } from "react-router-dom";

function BinaryCode() {

  const navigate = useNavigate();

  return(
    <>
    <div className="binaryRoot">
      <div className="biContainer">
        <div className="biCodeArea">
          <h2>疑似言語で実装</h2>
          <p>二分探索を疑似言語で実装してみます。具体的にはデータ群に二分探索を行い探したいデータと同じものがあればその要素の番号を、見つからなければ -1 を出力します。</p>
          <p>まず探索対象のデータ群(array)、探したいデータ(target)、結果をいれる変数(result)を定義します。また、探索範囲の左端となる要素番号(left)、右端となる要素番号(right)、
            探索範囲の真ん中の要素番号(mid)も定義します。</p>
          <div className="biCode">
          <p>整数型の配列:&ensp;array ← {"{2, 4, 7, 9, 10, 11}"}</p>
          <p>整数型:&ensp;target ← 11</p>
          <p>整数型:&ensp;result ← -1</p>
          <p>整数型:&ensp;left ← 1</p>
          <p>整数型:&ensp;right ← arrayの要素数</p>
          <p>整数型:&ensp;mid</p>
          </div>
          <p>続いて探索部分を実装していきます。二分探索は探索範囲の真ん中の要素を目的のデータと比較し目的のデータでなければ探索範囲を絞るというのを繰り返します。
            そのためまずは、(high+low)/2で真ん中の要素番号（探索対象）を決め、求めた番号はmidに入れておきます。次にtargetと比較し、同じならmidの値をresultに入れます。
            targetと違う場合はleftまたはrightを更新し探索範囲を絞りmidを求めるところからもう一度繰り返します。
          </p>
          <div className="biCode">
            <p>while&ensp;(leftがright以下 かつ resultが-1)</p>
            <p>&ensp;&ensp;mid ← (left+right)/2</p>            
            <p>&ensp;&ensp;if&ensp;(array[mid]がtargetと同じならば)</p>   
            <p>&ensp;&ensp;&ensp;&ensp;result ← mid</p>
            <p>&ensp;&ensp;endif</p>
            <p>&ensp;&ensp;if&ensp;(array[mid]がtargetよりも大きいならば)</p>
            <p>&ensp;&ensp;&ensp;&ensp;right ← mid - 1</p>
            <p>&ensp;&ensp;endif</p>
            <p>&ensp;&ensp;if&ensp;(array[mid]がtargetよりも小さいならば)</p>
            <p>&ensp;&ensp;&ensp;&ensp;left ← mid + 1</p>
            <p>&ensp;&ensp;endif</p>
            <p>endwhile</p>
          </div>
          <p>最後に探索結果を出力します。print()はかっこの中の変数に代入されている値を出力する手続きです。</p>
          <div className="biCode">
            <p>print(result)</p>
          </div>
          <p>説明を省いて疑似言語の部分だけを書くと次のようになります。</p>
          <div className="liCode">
            <p>整数型の配列:&ensp;array ← {"{2, 4, 7, 9, 10, 11}"}</p>
            <p>整数型:&ensp;target ← 11</p>
            <p>整数型:&ensp;result ← -1</p>
            <p>整数型:&ensp;left ← 1</p>
            <p>整数型:&ensp;right ← arrayの要素数</p>
            <p>整数型:&ensp;mid</p>
            <p>&ensp;</p>
            <p>while&ensp;(leftがright以下 かつ resultが-1)</p>
            <p>&ensp;&ensp;mid ← (left+right)/2</p>            
            <p>&ensp;&ensp;if&ensp;(array[mid]がtargetと同じならば)</p>   
            <p>&ensp;&ensp;&ensp;&ensp;result ← mid</p>
            <p>&ensp;&ensp;endif</p>
            <p>&ensp;&ensp;if&ensp;(array[mid]がtargetよりも大きいならば)</p>
            <p>&ensp;&ensp;&ensp;&ensp;right ← mid - 1</p>
            <p>&ensp;&ensp;endif</p>
            <p>&ensp;&ensp;if&ensp;(array[mid]がtargetよりも小さいならば)</p>
            <p>&ensp;&ensp;&ensp;&ensp;left ← mid + 1</p>
            <p>&ensp;&ensp;endif</p>
            <p>endwhile</p>
            <p>&ensp;</p>
            <p>print(result)</p>
            <p>&ensp;</p>
            <p>実行結果：6</p>
          </div>
          <p>最後に問題を解いて二分探索の復習をしましょう。</p>
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
export default BinaryCode   