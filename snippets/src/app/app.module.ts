import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { DatabaseComponent } from './database/database.component';
import { ResultsComponent } from './results/results.component';

import { DatabaseService } from './services/database.service';
import { ParseDescriptionService } from './services/parse-description.service';
import { AddSnippetComponent } from './add-snippet/add-snippet.component';
import { StatusMessageComponent } from './status-message/status-message.component';


@NgModule({
  declarations: [
    AppComponent,
    JobDescriptionComponent,
    DatabaseComponent,
    ResultsComponent,
    AddSnippetComponent,
    StatusMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatabaseService,ParseDescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
