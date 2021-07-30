import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-roxo',
  templateUrl: './roxo.page.html',
  styleUrls: ['./roxo.page.scss'],
})
export class RoxoPage implements OnInit {

 corroxo:string='Rocho';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  corRoxo(){
    this.tts.speak({
     text: this.corroxo,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/verde-claro');
  }

  letsback(){
    this.navCtrl.navigateBack('/preto')
  }
}



