import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TresPageRoutingModule } from './tres-routing.module';

import { TresPage } from './tres.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TresPageRoutingModule
  ],
  declarations: [TresPage],
  providers:[TextToSpeech]
})
export class TresPageModule {}
