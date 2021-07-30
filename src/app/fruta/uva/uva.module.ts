import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UvaPageRoutingModule } from './uva-routing.module';

import { UvaPage } from './uva.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UvaPageRoutingModule
  ],
  declarations: [UvaPage],
  providers:[TextToSpeech]
})
export class UvaPageModule {}
