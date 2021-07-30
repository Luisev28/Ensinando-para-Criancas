import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verde-claro',
  templateUrl: './verde-claro.page.html',
  styleUrls: ['./verde-claro.page.scss'],
})
export class VerdeClaroPage implements OnInit {

  corgreenclaro:string='Verde Claro';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

 corVerdeClaro(){
    this.tts.speak({
     text: this.corgreenclaro,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/verde-escuro');
  }

  letsback(){
    this.navCtrl.navigateBack('/roxo')
  }
}

