import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-um',
  templateUrl: './um.page.html',
  styleUrls: ['./um.page.scss'],
})
export class UmPage implements OnInit {

  um:string='1';

  constructor(private tts: TextToSpeech,
              private navCtrl:NavController) { }

  ngOnInit() {
  }

  numeroUm(){
    this.tts.speak({
     text: this.um,
     locale: 'pt-BR',
     rate: 0.75 
   })
   .catch((erro: any)=>{
     alert (erro);
   })
 
  }

  letsGo(){
    this.navCtrl.navigateForward('/dois');
  }
}

