import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutLaranjaPageRoutingModule } from './frut-laranja-routing.module';

import { FrutLaranjaPage } from './frut-laranja.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutLaranjaPageRoutingModule
  ],
  declarations: [FrutLaranjaPage],
  providers:[TextToSpeech]
})
export class FrutLaranjaPageModule {}
