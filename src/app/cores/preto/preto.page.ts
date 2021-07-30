import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preto',
  templateUrl: './preto.page.html',
  styleUrls: ['./preto.page.scss'],
})
export class PretoPage implements OnInit {

  corBlack:string='Preto';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  corPreto(){
    this.tts.speak({
     text: this.corBlack,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/roxo');
  }

  letsback(){
    this.navCtrl.navigateBack('/laranja')
  }
}

