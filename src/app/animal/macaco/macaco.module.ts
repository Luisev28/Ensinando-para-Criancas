import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacacoPageRoutingModule } from './macaco-routing.module';

import { MacacoPage } from './macaco.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacacoPageRoutingModule
  ],
  declarations: [MacacoPage],
  providers:[TextToSpeech]
})
export class MacacoPageModule {}
