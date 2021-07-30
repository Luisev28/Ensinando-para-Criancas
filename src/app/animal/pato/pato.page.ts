import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pato',
  templateUrl: './pato.page.html',
  styleUrls: ['./pato.page.scss'],
})
export class PatoPage implements OnInit {

  pato:string='Pato';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomePato(){
    this.tts.speak({
     text: this.pato,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/pombo');
  }

  letsback(){
    this.navCtrl.navigateBack('/onca')
  }
}
