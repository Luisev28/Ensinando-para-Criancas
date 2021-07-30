import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onca',
  templateUrl: './onca.page.html',
  styleUrls: ['./onca.page.scss'],
})
export class OncaPage implements OnInit {
  onca:string='Onça';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeOnca(){
    this.tts.speak({
     text: this.onca,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/pato');
  }

  letsback(){
    this.navCtrl.navigateBack('/macaco')
  }
}

