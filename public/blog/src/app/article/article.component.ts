import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article;

  constructor(private service: ArticlesService, private route: ActivatedRoute, private router: Router) {
    this.article = service.get(route.snapshot.params.id).then(res => this.article = res)
  }

  ngOnInit() {
  }

  delete(){
    const response = confirm("Are you sure you want to delete article?")

    if(response === true){
      this.service.delete(this.article.id).then(response => {
        alert("Article deleted!")
        this.router.navigate(['']).then()
      })
    }
  }
}
