import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PomboPageRoutingModule } from './pombo-routing.module';

import { PomboPage } from './pombo.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PomboPageRoutingModule
  ],
  declarations: [PomboPage],
  providers:[TextToSpeech]
})
export class PomboPageModule {}
