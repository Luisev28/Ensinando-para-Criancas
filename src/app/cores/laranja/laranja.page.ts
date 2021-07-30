import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-laranja',
  templateUrl: './laranja.page.html',
  styleUrls: ['./laranja.page.scss'],
})
export class LaranjaPage implements OnInit {

  cororange:string='Laranja';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  corLaranja(){
    this.tts.speak({
     text: this.cororange,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/preto');
  }

  letsback(){
    this.navCtrl.navigateBack('/azul')
  }
}

