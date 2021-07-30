import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-nove',
  templateUrl: './nove.page.html',
  styleUrls: ['./nove.page.scss'],
})
export class NovePage implements OnInit {

  nove:string='9';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  numeroNove(){
    this.tts.speak({
     text: this.nove,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/dez');
  }

  letsback(){
    this.navCtrl.navigateBack('/oito')
  }
}