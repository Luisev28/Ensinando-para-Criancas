import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pera',
  templateUrl: './pera.page.html',
  styleUrls: ['./pera.page.scss'],
})
export class PeraPage implements OnInit {

  pera:string='Peira';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomePera(){
    this.tts.speak({
     text: this.pera,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/uva');
  }

  letsback(){
    this.navCtrl.navigateBack('/melancia')
  }
}
