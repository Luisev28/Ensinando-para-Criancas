import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-azul',
  templateUrl: './azul.page.html',
  styleUrls: ['./azul.page.scss'],
})
export class AzulPage implements OnInit {
  corblue:string='Azul';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  corAzul(){
    this.tts.speak({
     text: this.corblue,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/laranja');
  }

  letsback(){
    this.navCtrl.navigateBack('/amarelo')
  }
}
