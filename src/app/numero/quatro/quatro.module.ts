import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuatroPageRoutingModule } from './quatro-routing.module';

import { QuatroPage } from './quatro.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuatroPageRoutingModule
  ],
  declarations: [QuatroPage],
  providers:[TextToSpeech]
})
export class QuatroPageModule {}
