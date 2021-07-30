import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoisPageRoutingModule } from './dois-routing.module';

import { DoisPage } from './dois.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoisPageRoutingModule
  ],
  declarations: [DoisPage],
  providers:[TextToSpeech]
})
export class DoisPageModule {}
