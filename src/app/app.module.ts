import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faSquare  as fasSquare, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
  faCircleUp,
  faCircleDown,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      fasSquare,
      faCheckSquare,
      faCoffee,
      farSquare,
      farCheckSquare,
      faCircleUp,
      faCircleDown,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }
}
