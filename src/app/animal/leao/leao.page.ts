import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-leao',
  templateUrl: './leao.page.html',
  styleUrls: ['./leao.page.scss'],
})
export class LeaoPage implements OnInit {
  leao:string='Leão';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeLeao(){
    this.tts.speak({
     text: this.leao,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/macaco');
  }

  letsback(){
    this.navCtrl.navigateBack('/girafa')
  }
}
