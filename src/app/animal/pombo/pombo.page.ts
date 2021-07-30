import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pombo',
  templateUrl: './pombo.page.html',
  styleUrls: ['./pombo.page.scss'],
})
export class PomboPage implements OnInit {

  pombo:string='Pombo';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomePombo(){
    this.tts.speak({
     text: this.pombo,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }


  letsback(){
    this.navCtrl.navigateBack('/pato')
  }
}
