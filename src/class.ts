// classの生成
class Person {
  // 何も修飾子を書いていない場合は、public修飾子が与えられている。明示的に与えてもok
  public gender: string;
  name: string;
  // フィールドにprivate修飾子をつけることでクラス以外からアクセスできなくすることができる。
  private age: number;
  // fieldに対してreadonly修飾子を与えることも可能
  readonly id: number = 1;
  private readonly email: string = 'test.com';

  // constructor関数を使用することで初期値を設定することができる。
  constructor(initName: string, initAge: number, initGender: string) {
    this.name = initName;
    this.age = initAge;
    this.gender = initGender;
    // constructor: 初期化
    // readonly修飾子を与えているものはconstructor関数内では書き換えできる。constructor外では不可
    this.id = 2;
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

  // 関数にprivate修飾子をつけることでクラス外からアクセスできなくすることも可能
  private incrementAge1() {
    this.age += 1;
  }
}
// インスタンスの生成。
const tom = new Person("Tom", 40, 'men');

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

// 初期化の方法を簡素化する方法
class Person1 {
  // fieldの記述は不要
  // constructor関数の引数にprivate pr public field名: 型のみで定義できる
  // readonlyを与えることで、読み込みのみできるようにする
  constructor(public readonly name: string, private age: number) {
  }
  incrementAge() {
    this.age += 1;
  }
}

const Tim = new Person1("Tim", 24);
Tim.incrementAge();
console.log(Tim);

// クラスの継承には、extends 継承したいクラス名で継承できる。
class Teacher extends Person {
}
const teacher = new Teacher("Dom", 30, "men");
