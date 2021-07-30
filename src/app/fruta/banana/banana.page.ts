import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.page.html',
  styleUrls: ['./banana.page.scss'],
})
export class BananaPage implements OnInit {

  banana:string='Banana';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeBanana(){
    this.tts.speak({
     text: this.banana,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/frut-laranja');
  }

  letsback(){
    this.navCtrl.navigateBack('/abacaxi')
  }
}

