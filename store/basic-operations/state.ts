import { Multiplication } from "~~/models/expressions"

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const TABELLINE = NUMBERS.flatMap(a => NUMBERS.map(b => new Multiplication(a, b)));
