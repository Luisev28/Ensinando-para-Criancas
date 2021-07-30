import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OncaPageRoutingModule } from './onca-routing.module';

import { OncaPage } from './onca.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OncaPageRoutingModule
  ],
  declarations: [OncaPage],
  providers:[TextToSpeech]
})
export class OncaPageModule {}
