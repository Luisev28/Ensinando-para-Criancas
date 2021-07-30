import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mamao',
  templateUrl: './mamao.page.html',
  styleUrls: ['./mamao.page.scss'],
})
export class MamaoPage implements OnInit {

 mamao:string='Mamão';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeMamao(){
    this.tts.speak({
     text: this.mamao,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/melancia');
  }

  letsback(){
    this.navCtrl.navigateBack('/maca')
  }
}
