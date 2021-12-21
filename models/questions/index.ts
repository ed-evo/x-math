import { Expression } from "../expressions";

export class NotAnsweredJetError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class MultiChoice {

  private _answer: number;

  constructor(private _question: Expression<number>, private _choices: Set<number>) {}

  get question() {
    return this._question;
  }

  get choices() {
    return this._choices;
  }

  get answer() {
    return this._answer;
  }
  set answer (answer: number) {
    this._answer = answer
  }
  get isAnswered() {
    return this._answer !== undefined;
  }
  get isCorrect() {
    if (!this.isAnswered) {
      throw new NotAnsweredJetError("Domanda non risposta");
    }
    let correctValue = this.question.value;
    let response = false;
    if (this.answer === correctValue) {
      response = true;
    } else if (Number.isNaN(this.answer)) {
      response = !this.choices.has(correctValue);
    }
    return response;
  }

  reset() {
    this._answer = undefined
  }
}
