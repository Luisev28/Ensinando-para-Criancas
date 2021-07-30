import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MelanciaPageRoutingModule } from './melancia-routing.module';

import { MelanciaPage } from './melancia.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MelanciaPageRoutingModule
  ],
  declarations: [MelanciaPage],
  providers:[TextToSpeech]
})
export class MelanciaPageModule {}
