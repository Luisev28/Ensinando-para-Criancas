import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-oito',
  templateUrl: './oito.page.html',
  styleUrls: ['./oito.page.scss'],
})
export class OitoPage implements OnInit {
  oito:string='8';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  numeroOito(){
    this.tts.speak({
     text: this.oito,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/nove');
  }

  letsback(){
    this.navCtrl.navigateBack('/sete')
  }
}
