import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-elefante',
  templateUrl: './elefante.page.html',
  styleUrls: ['./elefante.page.scss'],
})
export class ElefantePage implements OnInit {

  elefante:string='Elefante';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeElefante(){
    this.tts.speak({
     text: this.elefante,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/galinha');
  }

  letsback(){
    this.navCtrl.navigateBack('/cachorro')
  }
}

 