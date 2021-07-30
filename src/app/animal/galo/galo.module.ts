import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaloPageRoutingModule } from './galo-routing.module';

import { GaloPage } from './galo.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaloPageRoutingModule
  ],
  declarations: [GaloPage],
  providers:[TextToSpeech]
})
export class GaloPageModule {}
