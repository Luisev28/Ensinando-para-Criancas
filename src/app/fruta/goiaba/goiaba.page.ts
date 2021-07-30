import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-goiaba',
  templateUrl: './goiaba.page.html',
  styleUrls: ['./goiaba.page.scss'],
})
export class GoiabaPage implements OnInit {

  goiaba:string='Goiaba';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeGoiaba(){
    this.tts.speak({
     text: this.goiaba,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/limao');
  }

  letsback(){
    this.navCtrl.navigateBack('/frut-laranja')
  }
}
