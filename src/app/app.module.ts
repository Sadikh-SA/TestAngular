import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Utilisateur/utilisateur.component';
import { PartenaireComponent } from './Partenaire/partenaire.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PartenaireComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const MY_FORMAT: MatDateFormats = {
  parse: {
  dateInput: 'DD/MM/YYYY',
  },
  display: {
  dateInput: 'DD/MM/YYYY',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'DD/MM/YYYY',
  monthYearA11yLabel: 'MMMM YYYY',
  },
  };
