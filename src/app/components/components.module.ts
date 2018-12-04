import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';
import { AboutComponent } from './pages/about/about.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    UnderConstructionComponent,
    AboutComponent,
    DefaultComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UnderConstructionComponent
  ]
})
export class ComponentsModule { }
