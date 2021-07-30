import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-macaco',
  templateUrl: './macaco.page.html',
  styleUrls: ['./macaco.page.scss'],
})
export class MacacoPage implements OnInit {
  macaco:string='Macaco';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeMacaco(){
    this.tts.speak({
     text: this.macaco,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/onca');
  }

  letsback(){
    this.navCtrl.navigateBack('/leao')
  }
}

