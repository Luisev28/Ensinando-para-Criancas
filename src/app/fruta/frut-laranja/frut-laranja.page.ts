import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-frut-laranja',
  templateUrl: './frut-laranja.page.html',
  styleUrls: ['./frut-laranja.page.scss'],
})
export class FrutLaranjaPage implements OnInit {

  laranja:string='Laranja';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeLaranja(){
    this.tts.speak({
     text: this.laranja,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/goiaba');
  }

  letsback(){
    this.navCtrl.navigateBack('/banana')
  }
}
