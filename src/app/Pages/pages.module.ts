import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { ShellComponent } from './Shell/shell.component';
import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesComponent, ShellComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ToolbarComponent,
    RouterModule.forChild(routes)
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
