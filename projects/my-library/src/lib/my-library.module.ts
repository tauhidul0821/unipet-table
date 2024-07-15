import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import {MyButtonComponent} from "./my-button/my-button.component";
import {NgIf} from "@angular/common";
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    MyLibraryComponent,
    MyButtonComponent
  ],
  imports: [
    NgIf,
    NzButtonModule
  ],
  exports: [
    MyLibraryComponent,
    MyButtonComponent
  ]
})
export class MyLibraryModule { }
