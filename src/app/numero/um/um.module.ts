import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmPageRoutingModule } from './um-routing.module';

import { UmPage } from './um.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmPageRoutingModule
  ],
  declarations: [UmPage],
  providers:[TextToSpeech]
})
export class UmPageModule {}
