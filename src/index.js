import "@babel/polyfill";
import str from "./player.js";
//expose-loader
console.log(str);

class A {
  a = 1;
}
let a = new A();
console.log(a.a);
