import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cachorro',
    loadChildren: () => import('./animal/cachorro/cachorro.module').then( m => m.CachorroPageModule)
  },
  {
    path: 'elefante',
    loadChildren: () => import('./animal/elefante/elefante.module').then( m => m.ElefantePageModule)
  },
  {
    path: 'galinha',
    loadChildren: () => import('./animal/galinha/galinha.module').then( m => m.GalinhaPageModule)
  },
  {
    path: 'galo',
    loadChildren: () => import('./animal/galo/galo.module').then( m => m.GaloPageModule)
  },
  {
    path: 'gato',
    loadChildren: () => import('./animal/gato/gato.module').then( m => m.GatoPageModule)
  },
  {
    path: 'girafa',
    loadChildren: () => import('./animal/girafa/girafa.module').then( m => m.GirafaPageModule)
  },
  {
    path: 'leao',
    loadChildren: () => import('./animal/leao/leao.module').then( m => m.LeaoPageModule)
  },
  {
    path: 'macaco',
    loadChildren: () => import('./animal/macaco/macaco.module').then( m => m.MacacoPageModule)
  },
  {
    path: 'onca',
    loadChildren: () => import('./animal/onca/onca.module').then( m => m.OncaPageModule)
  },
  {
    path: 'pato',
    loadChildren: () => import('./animal/pato/pato.module').then( m => m.PatoPageModule)
  },
  {
    path: 'pombo',
    loadChildren: () => import('./animal/pombo/pombo.module').then( m => m.PomboPageModule)
  },
  {
    path: 'amarelo',
    loadChildren: () => import('./cores/amarelo/amarelo.module').then( m => m.AmareloPageModule)
  },
  {
    path: 'azul',
    loadChildren: () => import('./cores/azul/azul.module').then( m => m.AzulPageModule)
  },
  {
    path: 'laranja',
    loadChildren: () => import('./cores/laranja/laranja.module').then( m => m.LaranjaPageModule)
  },
  {
    path: 'preto',
    loadChildren: () => import('./cores/preto/preto.module').then( m => m.PretoPageModule)
  },
  {
    path: 'roxo',
    loadChildren: () => import('./cores/roxo/roxo.module').then( m => m.RoxoPageModule)
  },
  {
    path: 'verde-claro',
    loadChildren: () => import('./cores/verde-claro/verde-claro.module').then( m => m.VerdeClaroPageModule)
  },
  {
    path: 'verde-escuro',
    loadChildren: () => import('./cores/verde-escuro/verde-escuro.module').then( m => m.VerdeEscuroPageModule)
  },
  {
    path: 'vermelho',
    loadChildren: () => import('./cores/vermelho/vermelho.module').then( m => m.VermelhoPageModule)
  },
  {
    path: 'abacaxi',
    loadChildren: () => import('./fruta/abacaxi/abacaxi.module').then( m => m.AbacaxiPageModule)
  },
  {
    path: 'banana',
    loadChildren: () => import('./fruta/banana/banana.module').then( m => m.BananaPageModule)
  },
  {
    path: 'goiaba',
    loadChildren: () => import('./fruta/goiaba/goiaba.module').then( m => m.GoiabaPageModule)
  },
  {
    path: 'limao',
    loadChildren: () => import('./fruta/limao/limao.module').then( m => m.LimaoPageModule)
  },
  {
    path: 'maca',
    loadChildren: () => import('./fruta/maca/maca.module').then( m => m.MacaPageModule)
  },
  {
    path: 'mamao',
    loadChildren: () => import('./fruta/mamao/mamao.module').then( m => m.MamaoPageModule)
  },
  {
    path: 'melancia',
    loadChildren: () => import('./fruta/melancia/melancia.module').then( m => m.MelanciaPageModule)
  },
  {
    path: 'pera',
    loadChildren: () => import('./fruta/pera/pera.module').then( m => m.PeraPageModule)
  },
  {
    path: 'uva',
    loadChildren: () => import('./fruta/uva/uva.module').then( m => m.UvaPageModule)
  },
  {
    path: 'frut-laranja',
    loadChildren: () => import('./fruta/frut-laranja/frut-laranja.module').then( m => m.FrutLaranjaPageModule)
  },
  {
    path: 'um',
    loadChildren: () => import('./numero/um/um.module').then( m => m.UmPageModule)
  },
  {
    path: 'dois',
    loadChildren: () => import('./numero/dois/dois.module').then( m => m.DoisPageModule)
  },
  {
    path: 'tres',
    loadChildren: () => import('./numero/tres/tres.module').then( m => m.TresPageModule)
  },
  {
    path: 'quatro',
    loadChildren: () => import('./numero/quatro/quatro.module').then( m => m.QuatroPageModule)
  },
  {
    path: 'cinco',
    loadChildren: () => import('./numero/cinco/cinco.module').then( m => m.CincoPageModule)
  },
  {
    path: 'seis',
    loadChildren: () => import('./numero/seis/seis.module').then( m => m.SeisPageModule)
  },
  {
    path: 'sete',
    loadChildren: () => import('./numero/sete/sete.module').then( m => m.SetePageModule)
  },
  {
    path: 'oito',
    loadChildren: () => import('./numero/oito/oito.module').then( m => m.OitoPageModule)
  },
  {
    path: 'nove',
    loadChildren: () => import('./numero/nove/nove.module').then( m => m.NovePageModule)
  },
  {
    path: 'dez',
    loadChildren: () => import('./numero/dez/dez.module').then( m => m.DezPageModule)
  },
  {
    path: 'exercicios',
    loadChildren: () => import('./exercicios/exercicios.module').then( m => m.ExerciciosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
