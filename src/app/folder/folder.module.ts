import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
  
  ],
  declarations: [FolderPage],
  providers:[TextToSpeech]
})
export class FolderPageModule {}
