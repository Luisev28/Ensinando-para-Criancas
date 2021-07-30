import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-girafa',
  templateUrl: './girafa.page.html',
  styleUrls: ['./girafa.page.scss'],
})
export class GirafaPage implements OnInit {

  girafa:string='Girafa';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeGirafa(){
    this.tts.speak({
     text: this.girafa,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/leao');
  }

  letsback(){
    this.navCtrl.navigateBack('/gato')
  }
}
