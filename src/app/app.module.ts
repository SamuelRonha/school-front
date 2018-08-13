import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
/*
 * Platform and Environment providers/directives/pipes
 */
import {routing} from './app.routing';

// App is our top level component
import {App} from './app.component';
import {AppState, InternalStateType} from './app.service';
import {GlobalState} from './global.state';
import {NgaModule} from './theme/nga.module';
import {PagesModule} from './pages/pages.module';
import {OwlCarouselComponent} from "./components/owl-carousel/owl-carousel.component";
import {PaisComponent} from "./pages/school/locations/pais/pais.component";
import {TableComponent} from "./components/table/table.component";
import {NavComponent} from "./components/nav/nav.component";
import {LoginComponent} from "./components/login/login.component";
import {PanelComponent} from "./components/panel/panel.component";
import {HomeComponent} from "./components/home/home.component";
import {ControllerComponent} from "./pages/school/controller/controller.component";
import {EstadoComponent} from "./pages/school/locations/estado/estado.component";
import {CustomFormComponent} from "./components/custom-form/custom-form.component";
import {CustomComboComponent} from "./components/custom-combo/custom-combo.component";
import {CidadeComponent} from "./pages/school/locations/cidade/cidade.component";
import {ProfessorComponent} from "./pages/school/pessoa/professor/professor.component";
import {OwlModule} from 'ngx-owl-carousel';
import {GenericService} from "./pages/school/service/generic.service";


// Application wide providers
const APP_PROVIDERS = [
  AppState,
  GlobalState
];

export type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [App],
  declarations: [
    App,
    OwlCarouselComponent,
    NavComponent,
    LoginComponent,
    PanelComponent,
    HomeComponent,
    ControllerComponent,
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgaModule.forRoot(),
    NgbModule.forRoot(),
    PagesModule,
    routing,
    OwlModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS, GenericService
  ]
})

export class AppModule {

  constructor(public appState: AppState) {
  }
}
