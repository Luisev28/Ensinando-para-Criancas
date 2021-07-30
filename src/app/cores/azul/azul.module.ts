import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AzulPageRoutingModule } from './azul-routing.module';

import { AzulPage } from './azul.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AzulPageRoutingModule
  ],
  declarations: [AzulPage],
  providers:[TextToSpeech]
})
export class AzulPageModule {}
