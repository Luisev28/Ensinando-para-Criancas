import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PretoPageRoutingModule } from './preto-routing.module';

import { PretoPage } from './preto.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PretoPageRoutingModule
  ],
  declarations: [PretoPage],
  providers:[TextToSpeech]
})
export class PretoPageModule {}
