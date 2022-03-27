"use strict";
// classの生成
class Person {
    // constructor関数を使用することで初期値を設定することができる。
    constructor(initName) {
        this.name = initName;
    }
}
// インスタンスの生成。
const tom = new Person("Tom");
console.log(tom);
