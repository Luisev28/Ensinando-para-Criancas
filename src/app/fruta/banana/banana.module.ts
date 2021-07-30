import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BananaPageRoutingModule } from './banana-routing.module';

import { BananaPage } from './banana.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BananaPageRoutingModule
  ],
  declarations: [BananaPage],
  providers:[TextToSpeech]
})
export class BananaPageModule {}
