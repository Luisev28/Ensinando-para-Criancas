import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cachorro',
  templateUrl: './cachorro.page.html',
  styleUrls: ['./cachorro.page.scss'],
})
export class CachorroPage implements OnInit {

cachorro:string='Cachorro';

  constructor(private tts: TextToSpeech,
              private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeCachorro(){
    this.tts.speak({
     text: this.cachorro,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/elefante');
  }
}
