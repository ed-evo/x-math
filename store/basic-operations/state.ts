import { Multiplication, Expression } from "~~/models/expressions"

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const tabelline = NUMBERS.flatMap(a => NUMBERS.map(b => new Multiplication(a, b)));

export let current: Expression<number> = null;

export let choices: number[] = [];
