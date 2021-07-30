import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GirafaPageRoutingModule } from './girafa-routing.module';

import { GirafaPage } from './girafa.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GirafaPageRoutingModule
  ],
  declarations: [GirafaPage],
  providers:[TextToSpeech]
})
export class GirafaPageModule {}
