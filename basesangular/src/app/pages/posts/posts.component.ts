import { Component, OnInit } from '@angular/core';

import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  mensagens: any;

  constructor(
    private dataService: DataService
    ) {

    }

  ngOnInit(): void {
    this.mensagens = this.dataService.getPosts();

  }

  escutarClick(id: number){
    console.log('Click em: ', id)
  }



}
