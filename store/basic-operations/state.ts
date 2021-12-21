import { Multiplication, Expression } from "~~/models/expressions"
import { MultiChoice } from "~~/models/questions";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const tabelline = NUMBERS.flatMap(a => NUMBERS.map(b => new Multiplication(a, b)));

export let question: MultiChoice = null;

export let history: MultiChoice[] = []
