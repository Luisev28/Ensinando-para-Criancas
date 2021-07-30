import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MacaPageRoutingModule } from './maca-routing.module';

import { MacaPage } from './maca.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MacaPageRoutingModule
  ],
  declarations: [MacaPage],
  providers:[TextToSpeech]
})
export class MacaPageModule {}
