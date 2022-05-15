// // 문자열
// const str: string = 'hello';

// // 숫자
// const num: number = 10;

// // 배열
// const arr: Array<string> = [];
// arr.push('hi');

// // 배열 - 리터럴 적용
// const items: string[] = [];

// // 튜플
// const address: [string, number] = ['판교', 40];

// // 객체
// const obj: object = {};
// // obj.a = 10;

// // 타입 객체
// const person: { age: number; name: string } = { age: 100, name: 'Capt' };
// person.age = 101;

// // 진위값
// let isLogin: boolean = false;

// String
const str: string = 'hello'

// Number
const num: number = 10

// Array
const arr: Array<number> = [1,2,3]    // 제네릭
const arr2: string[] = ['1', '2', '3']  // 기본 배열 타입선언

// Tuple
const address: [string, number] = ['hi', 2]

// Object
let obj: object = {}
obj.a = 'A'   // ts error! - 속성 없음

let person: { a: string, b: number } = {
  a: 'A',
  b: 2,
  c: undefined,   // ts error! - 프로퍼티 없음
}

// Boolean
const isTrue: boolean = true