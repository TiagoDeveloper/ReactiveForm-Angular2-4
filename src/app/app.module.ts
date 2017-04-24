import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PanelComponent } from './panel/panel.component';
import { TestesComponent } from './testes/testes.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    PanelComponent,
    TestesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
