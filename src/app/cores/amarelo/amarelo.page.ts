import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-amarelo',
  templateUrl: './amarelo.page.html',
  styleUrls: ['./amarelo.page.scss'],
})
export class AmareloPage implements OnInit {
  coryellow:string='Amarelo';

  constructor(private tts: TextToSpeech,
              private navCtrl:NavController) { }

  ngOnInit() {
  }

  corAmarelo(){
    this.tts.speak({
     text: this.coryellow,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/azul');
  }
}