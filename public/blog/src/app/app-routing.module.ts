import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent} from "./login/login.component";
import { ArticleComponent} from './article/article.component'
import {CreateArticleComponent} from "./create-article/create-article.component";
import {UpdateArticleComponent} from "./update-article/update-article.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'articles/create',
    component: CreateArticleComponent,
  },
  {
    path: 'articles/:id',
    component: ArticleComponent,
  },
  {
    path: 'articles/:id/edit',
    component: UpdateArticleComponent,
  },
  {
    path: 'account/login',
    component: LoginComponent,
  },
  {
    path: 'account/register',
    component: RegisterComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
