import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { EducationalComponent } from './educational/educational.component';
import { RegisterComponent } from './register/register.component';
import { MotivationalComponent } from './motivational/motivational.component';
import { FooterComponent } from './footer/footer.component';
import { PoliticsComponent } from './politics/politics.component';
import { TechnologyComponent } from './technology/technology.component';
import { OthersComponent } from './others/others.component';
import { ErrorComponent } from './error/error.component';
import { MockService } from './mock.service';

const ROUTES = [
  {path: '', component: LandingComponent},
  {path: 'home', component: LandingComponent},
  {path: 'educational', component: EducationalComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'motivational', component: MotivationalComponent},
  {path: 'politics',component:PoliticsComponent},
  {path: 'technology',component:TechnologyComponent},
  {path: 'others',component:OthersComponent},
  {path: '**',component:ErrorComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    EducationalComponent,
    RegisterComponent,
    MotivationalComponent,
    FooterComponent,
    PoliticsComponent,
    TechnologyComponent,
    OthersComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule
  ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
