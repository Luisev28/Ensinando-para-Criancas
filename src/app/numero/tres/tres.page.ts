import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.page.html',
  styleUrls: ['./tres.page.scss'],
})
export class TresPage implements OnInit {

  tres:string='3';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  numeroTres(){
    this.tts.speak({
     text: this.tres,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/quatro');
  }

  letsback(){
    this.navCtrl.navigateBack('/dois')
  }
}
