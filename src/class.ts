// classの生成
class Person {
  name: string;

  // constructor関数を使用することで初期値を設定することができる。
  constructor(initName: string) {
    this.name = initName;
  }

  // メソッドの書き方
  // thisにも型をつけることができる。すると呼び出し先でも型チェックが行われる。
  greeting(this: {name: string}) {
    console.log(`Hello My Name Is ${this.name}`);
  }
}
// インスタンスの生成。
const tom = new Person("Tom");
console.log(tom);

// メソッドを使用する方法
tom.greeting();

const anotherTom = {
  // thisの扱いには注意が必要
  // 下記nameフィールドが存在しないとundefinedが出力されるので注意。
  // thisは呼び出された時（実行時）の値がsetされる。
  name: 'anotherTom',
  anotherGreeting: tom.greeting
}
anotherTom.anotherGreeting();
