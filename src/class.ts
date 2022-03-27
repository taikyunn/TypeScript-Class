// classの生成
class Person {
  name: string;
  // フィールドにprivate修飾子をつけることでクラス以外からアクセスできなくすることができる。
  private age: number;

  // constructor関数を使用することで初期値を設定することができる。
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  // メソッドの書き方
  // thisにも型をつけることができる。すると呼び出し先でも型チェックが行われる。
  greeting(this: {name: string}) {
    console.log(`Hello My Name Is ${this.name}`);
  }

  // thisの中身が複数になってくるとコードが長くなるので、下記のようにPerson型としてthisを定義することもできる。
  greeting1(this: Person) {
    console.log(`Hello My Name Is ${this.name} I am ${this.age} years old`);
  }

  incrementAge() {
    this.age += 1;
  }
}
// インスタンスの生成。
const tom = new Person("Tom", 40);
console.log(tom);

// メソッドを使用する方法
tom.greeting();
tom.incrementAge();
tom.greeting1();

const anotherTom = {
  // thisの扱いには注意が必要
  // 下記nameフィールドが存在しないとundefinedが出力されるので注意。
  // thisは呼び出された時（実行時）の値がsetされる。
  name: 'anotherTom',
  anotherGreeting: tom.greeting
}
anotherTom.anotherGreeting();

// classを作る型(インスタンス)を表すことができる
// 今回の場合はPersonという型を作ることができる
let person2: Person;
