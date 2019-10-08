import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss']
})
export class UpdateArticleComponent implements OnInit {

  article;
  constructor(private service: ArticlesService, private route: ActivatedRoute, private router: Router) {
    this.article = service.get(route.snapshot.params.id).then(res => this.article = res)
  }
  ngOnInit() {
  }

  update() {
    this.service.update(this.article.id, this.article).subscribe(response => {
      alert('Article Updated')
      this.router.navigate(['/articles', this.article.id])
    })
  }
}
