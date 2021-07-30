import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sete',
  templateUrl: './sete.page.html',
  styleUrls: ['./sete.page.scss'],
})
export class SetePage implements OnInit {
  sete:string='7';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  numeroSete(){
    this.tts.speak({
     text: this.sete,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/oito');
  }

  letsback(){
    this.navCtrl.navigateBack('/seis')
  }
}
