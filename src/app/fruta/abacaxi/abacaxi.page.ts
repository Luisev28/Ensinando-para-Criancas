import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-abacaxi',
  templateUrl: './abacaxi.page.html',
  styleUrls: ['./abacaxi.page.scss'],
})
export class AbacaxiPage implements OnInit {
  abacaxi:string='Abacachi';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeAbacaxi(){
    this.tts.speak({
     text: this.abacaxi,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/banana');
  }

 
}
