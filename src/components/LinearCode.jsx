import './LinearCode.css';
import { useNavigate } from "react-router-dom";

function LinearCode() {

  const navigate = useNavigate();

  return(
  <>
  <div className="linearRoot">
    <div className="liContainer">
      <div className="liCodeArea">
        <h2>疑似言語で実装</h2>
        <p>線形探索を疑似言語で実装してみます。具体的にはデータ群の各要素を順に調べて探したいデータと同じものがあればその要素の番号を、見つからなければ -1 を出力します。</p>
        <p>まず探索対象のデータ群、探したいデータ、データ群の要素番号、結果をいれる変数を順に定義します。</p>
        <div className="liCode">
          <p>整数型の配列:&ensp;array ← {"{1, 2, 8, 4, 5}"}</p>
          <p>整数型:&ensp;target ← 8</p>
          <p>整数型:&ensp;i ← 0</p>
          <p>整数型:&ensp;result ← -1</p>
        </div>
        <p>つぎに探索をしていきます。arrayの各要素とtargetを比較していきます。もし同じ値を見つけたら、その要素番号をresultに代入し探索を終了します。</p>
        <div className="liCode">
          <p>while&ensp;(iがarrayの要素数以下 かつ resultが-1)</p>
          <p>&ensp;&ensp;if&ensp;(array[i]がtargetと同じならば)</p>            
          <p>&ensp;&ensp;&ensp;&ensp;result←i</p>   
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;i ← i + 1</p>
          <p>endwhile</p>
        </div>
        <p>最後に探索結果を出力します。print()はかっこの中の変数に代入されている値を出力する手続きです。</p>
        <div className="liCode">
          <p>print(result)</p>
        </div>
        <p>説明を省いて疑似言語の部分だけを書くと次のようになります。</p>
        <div className="liCode">
          <p>整数型の配列:&ensp;array ← {"{1, 2, 8, 4, 5}"}</p>
          <p>整数型:&ensp;target ← 8</p>
          <p>整数型:&ensp;i ← 1</p>
          <p>整数型:&ensp;result ← -1</p>
          <p>while&ensp;(iがarrayの要素数以下 かつ resultが-1)</p>
          <p>&ensp;&ensp;if&ensp;(array[i]がtargetと同じならば)</p>            
          <p>&ensp;&ensp;&ensp;&ensp;result←i</p>   
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;i ← i + 1</p>
          <p>endwhile</p>
          <p>print(result)</p>
          <p>&ensp;</p>
          <p>実行結果：3</p>
        </div>
        <p>最後に問題を解いて線形探索の復習をしましょう。</p>  
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

export default LinearCode