import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-limao',
  templateUrl: './limao.page.html',
  styleUrls: ['./limao.page.scss'],
})
export class LimaoPage implements OnInit {

  limao:string='Limão';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeLimao(){
    this.tts.speak({
     text: this.limao,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/maca');
  }

  letsback(){
    this.navCtrl.navigateBack('/goiaba')
  }
}
