import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DezPageRoutingModule } from './dez-routing.module';

import { DezPage } from './dez.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DezPageRoutingModule
  ],
  declarations: [DezPage],
  providers:[TextToSpeech]
})
export class DezPageModule {}
