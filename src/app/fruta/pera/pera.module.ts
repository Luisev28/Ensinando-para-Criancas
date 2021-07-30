import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeraPageRoutingModule } from './pera-routing.module';

import { PeraPage } from './pera.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeraPageRoutingModule
  ],
  declarations: [PeraPage],
  providers:[TextToSpeech]
})
export class PeraPageModule {}
