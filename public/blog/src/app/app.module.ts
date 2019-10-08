import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import {JwtModule} from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { DateFnsModule } from 'ngx-date-fns';
import { CreateArticleComponent } from './create-article/create-article.component';
import {FormsModule} from "@angular/forms";
import { UpdateArticleComponent } from './update-article/update-article.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ArticleComponent,
    CreateArticleComponent,
    UpdateArticleComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DateFnsModule.forRoot(),
    FormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: ()=> {
          return localStorage.getItem('access_token')
        },
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ["localhost:4200","localhost:4200/articles/:id", "localhost:4200/account/register", "localhost:4200/account/login"]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
