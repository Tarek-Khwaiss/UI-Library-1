import { testString, changeBackground } from './dom';

console.log(testString);
console.log('hello from app.js');
const ass = 43;
let assString = `my ass is ${ass} inches wide`;

const func = (assString) => {
    console.log("hello" + assString);
};
console.log("testing");
console.log("testing");
console.log("testing");

func(assString);
func(assString);
func(assString);
func(assString);

changeBackground();