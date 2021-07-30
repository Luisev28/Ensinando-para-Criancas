import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-quatro',
  templateUrl: './quatro.page.html',
  styleUrls: ['./quatro.page.scss'],
})
export class QuatroPage implements OnInit {

  quatro:string='4';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  numeroQuatro(){
    this.tts.speak({
     text: this.quatro,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/cinco');
  }

  letsback(){
    this.navCtrl.navigateBack('/tres')
  }
}
