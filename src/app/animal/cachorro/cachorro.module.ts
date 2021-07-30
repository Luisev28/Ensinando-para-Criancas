import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CachorroPageRoutingModule } from './cachorro-routing.module';

import { CachorroPage } from './cachorro.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CachorroPageRoutingModule
  ],
  declarations: [CachorroPage],
  providers:[TextToSpeech]
})
export class CachorroPageModule {}
 