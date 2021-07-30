import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galinha',
  templateUrl: './galinha.page.html',
  styleUrls: ['./galinha.page.scss'],
})
export class GalinhaPage implements OnInit {
  galinha:string='Galinha';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeGalinha(){
    this.tts.speak({
     text: this.galinha,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/galo');
  }

  letsback(){
    this.navCtrl.navigateBack('/elefante')
  }
}
