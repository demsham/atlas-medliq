import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { M6Component } from './m6.component';
import { SeclayoutComponent } from './seclayout/m6.seclayout.component';
import { PrevDirective } from './directives/m6.prev.directive';
import { NextDirective } from './directives/m6.next.directive';
import { SynchDirective } from './directives/m6.synch.directive';
import { PaginationDirective } from './directives/m6.pagination.directive';
import { InfoComponent } from './info/m6.info.component';
import { ArrowpreDirective } from './directives/m6.arrowpre.directive';
import { ArrownextDirective } from './directives/m6.arrownext.directive';
import { ShortcutDirective } from './directives/m6.shortcut.directive';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: M6Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M6RoutingModule { }

@NgModule({
  declarations: [
    PrevDirective,
    NextDirective,
    M6Component,
    SeclayoutComponent,
    SynchDirective,
    PaginationDirective,
    InfoComponent,
    ArrowpreDirective,
    ArrownextDirective,
    ShortcutDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    M6RoutingModule
  ]
})
export class M6Module { }
