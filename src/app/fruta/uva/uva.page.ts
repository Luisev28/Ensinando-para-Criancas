import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-uva',
  templateUrl: './uva.page.html',
  styleUrls: ['./uva.page.scss'],
})
export class UvaPage implements OnInit {
  uva:string='Uva';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  nomeUva(){
    this.tts.speak({
     text: this.uva,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsback(){
    this.navCtrl.navigateBack('/pera')
  }
}
