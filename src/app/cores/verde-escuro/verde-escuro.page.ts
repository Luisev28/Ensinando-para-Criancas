import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verde-escuro',
  templateUrl: './verde-escuro.page.html',
  styleUrls: ['./verde-escuro.page.scss'],
})
export class VerdeEscuroPage implements OnInit {

  corgreenEscuro:string='Verde Escuro';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  corVerdeEscuro(){
    this.tts.speak({
     text: this.corgreenEscuro,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/vermelho');
  }

  letsback(){
    this.navCtrl.navigateBack('/verde-claro')
  }
}

