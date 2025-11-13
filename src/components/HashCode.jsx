import './HashCode.css';
import { useNavigate } from "react-router-dom";

function HashCode(){

  const navigate = useNavigate();

  return(
  <>
  <div className="hashCRoot">
    <div className="haContainer">
      <div className="haCodeArea">
        <h2>疑似言語で実装</h2>
        <p>ハッシュ法を疑似言語で実装してみます。配列の要素番号は0から始まるものとします。具体的にはデータの格納(追加)と探索を行います。格納では、データを格納できればtrue、できなければfalseを出力します。
          探索では見つかればその要素の番号を、見つからなければ-1を出力します。衝突が発生したときはオープンアドレス法によって別のハッシュ値を求めます。しかし、2回目のハッシュ値でも衝突が起きてしまった場合は格納失敗とします。</p>
        <p>まずは探索対象となるハッシュ表（array）を定義します。実際に値を代入するのは、後ほど定義する手続きtestの中で行います。また、配列の中身が -1 のときは、その場所が空いている（まだデータが入っていない） ことを表します。</p>
        <div className="haCode">
          <p>整数型の配列:&ensp;array</p>  
        </div>
        <p>ハッシュ法はまずハッシュ値を求める必要があるため、ハッシュ値を求める関数を実装します。衝突が発生した場合に備えて、2種類のハッシュ関数を用意します。基本的にはcalcHash1を使いますが、衝突したときはcalcHash2を使います。
          どちらの関数も、引数value格納または探索する値）を受け取り、計算したハッシュ値を返します。
        </p>
        <div className="haCode">
          <p>○整数型:&ensp;calcHash1(整数型:&ensp;value)</p>
          <p>&ensp;&ensp;return&ensp;value mod arrayの要素数</p>
          <p>&ensp;</p>
          <p>○整数型:&ensp;calcHash2(整数型:&ensp;value)</p>
          <p>&ensp;&ensp;return&ensp;(value + 1) mod arrayの要素数 </p>
        </div>
        <p>次にデータを追加する関数addを実装します。addはtrueまたはfalseを返すため論理型となります。calcHashと同様に格納するデータをvalueとして受け取っています。内容としてはハッシュ値を求めるためcalcHash1を実行してその値をiに入れておきます。
          そして、arrayのi番目の要素(array[i])が-1ならそこに格納してtrueを返し、-1でなければcalcHash2により別のハッシュ値を求めもう一度格納できるか確かめます。二つ目のハッシュ値の場所もすでにデータが格納されているならfalseを返します。
        </p>
        <div className="haCode">
          <p>○論理型:&ensp;add(整数型:&ensp;value)</p>
          <p>&ensp;&ensp;整数型:&ensp;i ← calcHash1(value)</p>
          <p>&ensp;&ensp;if(array[i]が-1ならば)</p>
          <p>&ensp;&ensp;&ensp;&ensp;array[i] ← value</p>
          <p>&ensp;&ensp;&ensp;&ensp;return&ensp;true</p>
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;i ← calcHash2(value)</p>
          <p>&ensp;&ensp;if(array[i]が-1ならば)</p>
          <p>&ensp;&ensp;&ensp;&ensp;array[i] ← value</p>
          <p>&ensp;&ensp;&ensp;&ensp;return&ensp;true</p>
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;return false</p>
        </div>
        <p>続いてデータを探索する関数searchを実装します。searchは見つけた要素の番号または-1を返すため整数型となります。calcHashと同様に追加するデータをvalueとして受け取っています。内容としてはcalcHsh1によりハッシュ値を求めてiにいれ、i番目の要素(array[i])を調べます。
          探索するデータであるvalueと同じならiを返します。違うならculcHash2で別のハッシュ値を求めもう一度探索します。それでも違うなら-1を返します。
        </p>
        <div className="haCode">
          <p>○整数型:&ensp;search(整数型:&ensp;value)</p>
          <p>&ensp;&ensp;整数型:&ensp;i ← calcHash1(value)</p>
          <p>&ensp;&ensp;if&ensp;(array[i]がvalueと同じならば)</p>
          <p>&ensp;&ensp;&ensp;&ensp;return&ensp;i</p>
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;i ← calcHash2(value)</p>
          <p>&ensp;&ensp;if&ensp;(array[i]がvalueと同じならば)</p>
          <p>&ensp;&ensp;&ensp;&ensp;return&ensp;i</p>
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;return&ensp;-1</p>
        </div>
        <p>最後に手続きtestを実装します。まずはハッシュ表となるarrayに-1をいれます。addやseachを実行してarrayにデータの格納、探索を行いその結果を出力します。</p>
        <div className="haCode">
          <p>○test</p>
          <p>&ensp;&ensp;array ← {"{-1, -1, -1, -1, -1, -1, -1}"}</p>
          <p>&ensp;&ensp;print(add(1))</p>
          <p>&ensp;&ensp;print(add(2))</p>
          <p>&ensp;&ensp;print(add(5))</p>
          <p>&ensp;&ensp;print(add(22))</p>
          <p>&ensp;&ensp;print(search(2))</p>
          <p>&ensp;&ensp;print(search(5))</p>
          <p>&ensp;&ensp;print(search(7))</p>
        </div>
        <p>説明を省いて疑似言語の部分だけを書くと次のようになります。</p>
        <div className="haCode">
          <p>○整数型:&ensp;calcHash1(整数型:&ensp;value)</p>
          <p>&ensp;&ensp;return&ensp;value mod arrayの要素数</p>
          <p>&ensp;</p>
          <p>○整数型:&ensp;calcHash2(整数型:&ensp;value)</p>
          <p>&ensp;&ensp;return&ensp;(value + 1) mod arrayの要素数 </p>
          <p>&ensp;</p>
          <p>○論理型:&ensp;add(整数型:&ensp;value)</p>
          <p>&ensp;&ensp;整数型:&ensp;i ← calcHash1(value)</p>
          <p>&ensp;&ensp;if(array[i]が-1ならば)</p>
          <p>&ensp;&ensp;&ensp;&ensp;array[i] ← value</p>
          <p>&ensp;&ensp;&ensp;&ensp;return&ensp;true</p>
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;i ← calcHash2(value)</p>
          <p>&ensp;&ensp;if(array[i]が-1ならば)</p>
          <p>&ensp;&ensp;&ensp;&ensp;array[i] ← value</p>
          <p>&ensp;&ensp;&ensp;&ensp;return&ensp;true</p>
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;return false</p>
          <p>&ensp;</p>
          <p>○整数型:&ensp;search(整数型:&ensp;value)</p>
          <p>&ensp;&ensp;整数型:&ensp;i ← calcHash1(value)</p>
          <p>&ensp;&ensp;if&ensp;(array[i]がvalueと同じならば)</p>
          <p>&ensp;&ensp;&ensp;&ensp;return&ensp;i</p>
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;i ← calcHash2(value)</p>
          <p>&ensp;&ensp;if&ensp;(array[i]がvalueと同じならば)</p>
          <p>&ensp;&ensp;&ensp;&ensp;return&ensp;i</p>
          <p>&ensp;&ensp;endif</p>
          <p>&ensp;&ensp;return&ensp;-1</p>
          <p>&ensp;</p>
          <p>○test</p>
          <p>&ensp;&ensp;array ← {"{-1, -1, -1, -1, -1, -1, -1}"}</p>
          <p>&ensp;&ensp;print(add(1))</p>
          <p>&ensp;&ensp;print(add(2))</p>
          <p>&ensp;&ensp;print(add(5))</p>
          <p>&ensp;&ensp;print(add(22))</p>
          <p>&ensp;&ensp;print(search(2))</p>
          <p>&ensp;&ensp;print(search(5))</p>
          <p>&ensp;&ensp;print(search(7))</p>
          <p>&ensp;</p>
          <p>testを実行した結果:</p>
          <p>true</p>
          <p>true</p>
          <p>true</p>
          <p>false</p>
          <p>2</p>
          <p>5</p>
          <p>-1</p>
        </div>
        <p>最後に問題を解いてハッシュ法の復習をしましょう。</p>
      </div>
      <div className="linkArea">
        <p className="toHome" onClick={() => navigate("/")}>ホームへ</p>
        <p className="toBinaryPractice" onClick={() => navigate("/HashPractice")}>問題を解く⇒</p>
      </div>  
    </div>
  </div>
  </>
  )
}
export default HashCode   