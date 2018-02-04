/** Common modules */
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';

/** Firebase modules */
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

/** Material modules */
import { MatToolbarModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

/** Services */
import { UserService } from './services/user/user.service';
import { ReportService } from './services/report/report.service';

/** Guards */
import { AuthGuard } from './core/auth.guard';

/** Components */
import { routes } from './core/app.routes';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportsAddComponent } from './components/reports-add/reports-add.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent,
    ReportsComponent,
    ReportsAddComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    routes,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [UserService, ReportService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
