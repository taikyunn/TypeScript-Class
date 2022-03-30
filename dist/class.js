"use strict";
// classの生成
class Person {
    // constructor関数を使用することで初期値を設定することができる。
    constructor(initName, initAge, initGender) {
        // fieldに対してreadonly修飾子を与えることも可能
        this.id = 1;
        // フィールドにprivate修飾子をつけることでクラス以外からアクセスできなくすることができる。
        this.email = 'test.com';
        this.name = initName;
        this.age = initAge;
        this.gender = initGender;
        // constructor: 初期化
        // readonly修飾子を与えているものはconstructor関数内では書き換えできる。constructor外では不可
        this.id = 2;
        // staticの初期値を設定したい場合
        Person.isAdult(20);
    }
    static isAdult(age) {
        // if文は下記のように書くこともできる
        if (age > 17)
            return true;
        return false;
    }
    // メソッドの書き方
    // thisにも型をつけることができる。すると呼び出し先でも型チェックが行われる。
    greeting() {
        console.log(`Hello My Name Is ${this.name}`);
    }
    // thisの中身が複数になってくるとコードが長くなるので、下記のようにPerson型としてthisを定義することもできる。
    greeting1() {
        console.log(`Hello My Name Is ${this.name} I am ${this.age} years old`);
    }
    incrementAge() {
        this.age += 1;
    }
    // 関数にprivate修飾子をつけることでクラス外からアクセスできなくすることも可能
    incrementAge1() {
        this.age += 1;
    }
}
// staticはthisを使用することができない。
Person.species = 'Homo';
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
};
anotherTom.anotherGreeting();
// classを作る型(インスタンス)を表すことができる
// 今回の場合はPersonという型を作ることができる
let person2;
// 初期化の方法を簡素化する方法
class Person1 {
    // fieldの記述は不要
    // constructor関数の引数にprivate pr public field名: 型のみで定義できる
    // readonlyを与えることで、読み込みのみできるようにする
    constructor(name, age) {
        this.name = name;
        this.age = age;
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
    constructor(name, age, gender, _subject) {
        // 継承元クラスでさらに初期化を行いたい場合はsuperをつけてまず元々のデータを初期化する必要がある
        super(name, age, gender);
        this._subject = _subject;
    }
    // getterの使用方法
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    // setter
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    greeting() {
        console.log(`Hello My Name Is ${this.name} I am ${this.age} years old. I teach ${this.subject}`);
    }
}
const teacher = new Teacher("Dom", 30, "men", "Math");
// setterを呼び出すとき
teacher.subject = 'Music';
teacher.greeting();
console.log(teacher.subject);
// static
Math.random();
console.log(Person.species);
console.log(Person.isAdult(20));
