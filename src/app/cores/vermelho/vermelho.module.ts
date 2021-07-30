import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VermelhoPageRoutingModule } from './vermelho-routing.module';

import { VermelhoPage } from './vermelho.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VermelhoPageRoutingModule
  ],
  declarations: [VermelhoPage],
  providers:[TextToSpeech]
})
export class VermelhoPageModule {}
