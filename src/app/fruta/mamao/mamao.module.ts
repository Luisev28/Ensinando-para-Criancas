import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MamaoPageRoutingModule } from './mamao-routing.module';

import { MamaoPage } from './mamao.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MamaoPageRoutingModule
  ],
  declarations: [MamaoPage],
  providers:[TextToSpeech]
})
export class MamaoPageModule {}
