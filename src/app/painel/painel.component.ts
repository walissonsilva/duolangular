import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public translatedText = '';
  public currentEnglishPhrase = '';
  public currentPhraseIndex = 0;
  public taskDone = false;
  public failed = false;

  public progressPct = 0;
  public tentatives = Array(3).fill(true);
  public numberTentatives = 3;

  public frases: Frase[] = FRASES;

  constructor() {}

  ngOnInit(): void {
    this.currentEnglishPhrase = this.frases[this.currentPhraseIndex].fraseEng;
  }

  public getTranslatedText(response: string): void {
    this.translatedText = response;
  }

  public submitResponse(): void {
    this.checkText();
  }

  public checkText(): void {
    const target = this.frases[this.currentPhraseIndex].frasePtBr;
    if (this.translatedText.toLocaleLowerCase() === target.toLocaleLowerCase()) {
      this.currentPhraseIndex++;

      if (this.currentPhraseIndex < this.frases.length) {
        this.currentEnglishPhrase = this.frases[this.currentPhraseIndex].fraseEng;
      } else {
        this.taskDone = true;
      }

      this.progressPct = this.currentPhraseIndex / this.frases.length * 100;

      document.querySelector('textarea').value = '';
    } else {
      this.numberTentatives--;
      this.tentatives.fill(false, 0, 3 - this.numberTentatives);

      if (this.numberTentatives === 0) {
        this.failed = true;
      }
    }
  }

}
