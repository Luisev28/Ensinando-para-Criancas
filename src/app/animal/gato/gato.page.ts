import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gato',
  templateUrl: './gato.page.html',
  styleUrls: ['./gato.page.scss'],
})
export class GatoPage implements OnInit {
  gato:string='Gato';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeGato(){
    this.tts.speak({
     text: this.gato,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/girafa');
  }

  letsback(){
    this.navCtrl.navigateBack('/galo')
  }
}
