/** Common modules */
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

/** Firebase modules */
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

/** Services */
import { UserService } from './services/user/user.service';
import { RecordService } from './services/record/record.service';

/** Components */
import { routes } from './app.routes';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    routes,
    BrowserAnimationsModule,
  ],
  providers: [UserService, RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
