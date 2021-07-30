import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dois',
  templateUrl: './dois.page.html',
  styleUrls: ['./dois.page.scss'],
})
export class DoisPage implements OnInit {

  dois:string='2';

  constructor(private tts: TextToSpeech,
              private navCtrl:NavController) { }

  ngOnInit() {
  }

  numeroDois(){
    this.tts.speak({
     text: this.dois,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/tres');
  }

  letsback(){
    this.navCtrl.navigateBack('/um')
  }
}

