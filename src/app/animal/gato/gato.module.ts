import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatoPageRoutingModule } from './gato-routing.module';

import { GatoPage } from './gato.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatoPageRoutingModule
  ],
  declarations: [GatoPage],
  providers:[TextToSpeech]
})
export class GatoPageModule {}
