import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetePageRoutingModule } from './sete-routing.module';

import { SetePage } from './sete.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetePageRoutingModule
  ],
  declarations: [SetePage],
  providers:[TextToSpeech]
})
export class SetePageModule {}
