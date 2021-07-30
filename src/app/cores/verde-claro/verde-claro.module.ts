import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerdeClaroPageRoutingModule } from './verde-claro-routing.module';

import { VerdeClaroPage } from './verde-claro.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerdeClaroPageRoutingModule
  ],
  declarations: [VerdeClaroPage],
  providers:[TextToSpeech]
})
export class VerdeClaroPageModule {}
