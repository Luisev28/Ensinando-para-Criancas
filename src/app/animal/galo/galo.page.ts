import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galo',
  templateUrl: './galo.page.html',
  styleUrls: ['./galo.page.scss'],
})
export class GaloPage implements OnInit {

  galo:string='Galo';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeGalo(){
    this.tts.speak({
     text: this.galo,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/gato');
  }

  letsback(){
    this.navCtrl.navigateBack('/galinha')
  }
}