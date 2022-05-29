import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-card-karma',
  templateUrl: './post-card-karma.component.html',
  styleUrls: ['./post-card-karma.component.css']
})
export class PostCardKarmaComponent implements OnInit {

  @Input() karma!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
