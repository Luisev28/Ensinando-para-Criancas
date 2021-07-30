import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovePageRoutingModule } from './nove-routing.module';

import { NovePage } from './nove.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovePageRoutingModule
  ],
  declarations: [NovePage],
  providers:[TextToSpeech]
})
export class NovePageModule {}
