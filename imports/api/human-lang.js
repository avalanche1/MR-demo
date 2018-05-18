// @flow

/**
 * @description: Pipes a value supplied as arg 1 through a batch of functions supplied as args
 * from 2 to N
 * @exampleInput: n\a
 * @exampleOutput: n\a
 * @pure: false; calls indeterminate amount of supplied functions which are potentially impure
 * @hasTests: false
 */
// eslint-disable-next-line fp/no-rest-parameters
export function make_sentence(...args) {
	const res = args.reduce((result, func, i) => {
		// No need for checking 1st arg; if no initialValue is provided - .reduce uses 1st
		// arg as initial value
		// https://learn.javascript.ru/array-iteration#reduce-reduceright
		/*let res;
    if (i === 0) {
      res = result;
    } else {
      res = func(result);
    }*/
		return func(result);
	});
	return res;
}

export const and = (x) => x;

// example usage
// import { make_sentence as s, and } from "../human-lang";

// const add2 = x => x + 2;
// const add10 = x => x + 10;

// function contains_numbers(string) {
//   const res = /\d/.test(string);
//   return res;
// }
// const is_true = x => (x === true ? true : false);
// const is_false = x => (x === false ? true : false);
// const value = 10;
// const stringify = x => Number(x).toString()
// const value1 = s(value, add2, and, add10, stringify);
// let res = s(value1, contains_numbers, and, is_false);
