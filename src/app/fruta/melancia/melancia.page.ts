import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-melancia',
  templateUrl: './melancia.page.html',
  styleUrls: ['./melancia.page.scss'],
})
export class MelanciaPage implements OnInit {

  melancia:string='Melancia';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeMelancia(){
    this.tts.speak({
     text: this.melancia,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/pera');
  }

  letsback(){
    this.navCtrl.navigateBack('/mamao')
  }
}
