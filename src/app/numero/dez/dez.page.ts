import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dez',
  templateUrl: './dez.page.html',
  styleUrls: ['./dez.page.scss'],
})
export class DezPage implements OnInit {

  dez:string='Deis';

  constructor(private tts: TextToSpeech,
    private navCtrl:NavController) { }

  ngOnInit() {
  }

  numeroDez(){
    this.tts.speak({
     text: this.dez,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }


  letsback(){
    this.navCtrl.navigateBack('/nove')
  }
}