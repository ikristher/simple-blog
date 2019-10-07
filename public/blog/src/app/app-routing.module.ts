import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent} from "./login/login.component";
import { ArticleComponent} from './article/article.component'
import {CreateArticleComponent} from "./create-article/create-article.component";

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
    path: 'account/login',
    component: LoginComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }