import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerdeEscuroPageRoutingModule } from './verde-escuro-routing.module';

import { VerdeEscuroPage } from './verde-escuro.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerdeEscuroPageRoutingModule
  ],
  declarations: [VerdeEscuroPage],
  providers:[TextToSpeech]
})
export class VerdeEscuroPageModule {}
