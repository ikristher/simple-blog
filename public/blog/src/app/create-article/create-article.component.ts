import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../services/articles.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  article = {
    title: '',
    content: ''
  }
  constructor(private service: ArticlesService, private router: Router) { }

  ngOnInit() {
  }

  submitForm() {
    this.service.create(this.article).subscribe(response => {
      alert('New Article Added')
      this.router.navigate(['/'])
    })
  }

}
