import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
 

  letraA: string = 'A';
  letraB: string = 'B';
  letraC: string = 'C';
  letraD: string = 'D';
  letraE: string = 'E';
  letraF: string = 'F';
  letraG: string = 'G';
  letraH: string = 'H';
  letraI: string = 'I';
  letraJ: string = 'J';
  letraK: string = 'K';
  letraL: string = 'L';
  letraM: string = 'M';
  letraN: string = 'N';
  letraO: string = 'O';
  letraP: string = 'P';
  letraQ: string = 'Q';
  letraR: string = 'R';
  letraS: string = 'S';
  letraT: string = 'T';
  letraU: string = 'U';
  letraV: string = 'V';
  letraW: string = 'Dabliu';
  letraX: string = 'X';
  letraY: string = 'Y';
  letraZ: string = 'Z';

  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
    
  }

 LetraA(){
   this.tts.speak({
    text: this.letraA,
    locale: 'pt-BR',
    rate: 0.75
  })
  .catch((erro: any)=>{
    alert (erro);
  })

 }

 LetraB(){
   this.tts.speak({
    text: this.letraB,
    locale: 'pt-BR',
    rate: 0.75
  })
  .catch((erro: any)=>{
    alert (erro);
  })
 }

 LetraC(){
  this.tts.speak({
   text: this.letraC,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraD(){
  this.tts.speak({
   text: this.letraD,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraE(){
  this.tts.speak({
   text: this.letraE,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraF(){
  this.tts.speak({
   text: this.letraF,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraG(){
  this.tts.speak({
   text: this.letraG,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraH(){
  this.tts.speak({
   text: this.letraH,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraI(){
  this.tts.speak({
   text: this.letraI,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraJ(){
  this.tts.speak({
   text: this.letraJ,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraK(){
  this.tts.speak({
   text: this.letraK,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraL(){
  this.tts.speak({
   text: this.letraL,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraM(){
  this.tts.speak({
   text: this.letraM,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraN(){
  this.tts.speak({
   text: this.letraN,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraO(){
  this.tts.speak({
   text: this.letraO,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraP(){
  this.tts.speak({
   text: this.letraP,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraQ(){
  this.tts.speak({
   text: this.letraQ,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraR(){
  this.tts.speak({
   text: this.letraR,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraS(){
  this.tts.speak({
   text: this.letraS,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraT(){
  this.tts.speak({
   text: this.letraT,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraU(){
  this.tts.speak({
   text: this.letraU,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraV(){
  this.tts.speak({
   text: this.letraV,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraW(){
  this.tts.speak({
   text: this.letraW,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraX(){
  this.tts.speak({
   text: this.letraX,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraY(){
  this.tts.speak({
   text: this.letraY,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

LetraZ(){
  this.tts.speak({
   text: this.letraZ,
   locale: 'pt-BR',
   rate: 0.75
 })
 .catch((erro: any)=>{
   alert (erro);
 })
}

}
