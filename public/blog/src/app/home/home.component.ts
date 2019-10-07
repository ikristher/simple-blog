import { Component, OnInit } from '@angular/core';
import { ArticlesService} from "../services/articles.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles$;
  constructor(private articles: ArticlesService) {
    this.articles$ = articles.all()
  }

  ngOnInit() {
  }

}
