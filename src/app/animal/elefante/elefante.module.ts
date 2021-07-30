import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElefantePageRoutingModule } from './elefante-routing.module';

import { ElefantePage } from './elefante.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    ElefantePageRoutingModule
  ],
  declarations: [ElefantePage],
  providers:[TextToSpeech]
})
export class ElefantePageModule {}
