import { Expression } from "../expressions";
import { DateTime } from 'luxon'

export class NotAnsweredJetError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class MultiChoice {

  private _creationTime: DateTime;
  private _answer: number;
  private _answerTime: DateTime;

  constructor(private _question: Expression<number>, private _choices: Set<number>) {
    this._creationTime = DateTime.now().setZone("Europe/Rome");
  }

  get creationTime() {
    return this._creationTime;
  }

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
    this._answer = answer;
    this._answerTime = DateTime.now().setZone("Europe/Rome");
    console.log(this)
  }
  get isAnswered() {
    return this._answer !== undefined;
  }

  get answerTime() {
    return this._answerTime;
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

  toString() {
    return `${this.question.toString()} = ${this.answer}`;
  }
}
