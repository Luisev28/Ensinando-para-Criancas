import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-maca',
  templateUrl: './maca.page.html',
  styleUrls: ['./maca.page.scss'],
})
export class MacaPage implements OnInit {

  maca:string='Massân';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeMaca(){
    this.tts.speak({
     text: this.maca,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/mamao');
  }

  letsback(){
    this.navCtrl.navigateBack('/limao')
  }
}
