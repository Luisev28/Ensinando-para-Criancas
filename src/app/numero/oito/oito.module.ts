import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OitoPageRoutingModule } from './oito-routing.module';

import { OitoPage } from './oito.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OitoPageRoutingModule
  ],
  declarations: [OitoPage],
  providers:[TextToSpeech]
})
export class OitoPageModule {}
