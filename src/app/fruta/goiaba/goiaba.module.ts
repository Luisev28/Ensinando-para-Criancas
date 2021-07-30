import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoiabaPageRoutingModule } from './goiaba-routing.module';

import { GoiabaPage } from './goiaba.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoiabaPageRoutingModule
  ],
  declarations: [GoiabaPage],
  providers:[TextToSpeech]
})
export class GoiabaPageModule {}
