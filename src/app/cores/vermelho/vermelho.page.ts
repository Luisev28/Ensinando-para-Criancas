import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vermelho',
  templateUrl: './vermelho.page.html',
  styleUrls: ['./vermelho.page.scss'],
})
export class VermelhoPage implements OnInit {

  corRed:string='Vermelho';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  corVermelho(){
    this.tts.speak({
     text: this.corRed,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }


  letsback(){
    this.navCtrl.navigateBack('/verde-escuro')
  }
}
