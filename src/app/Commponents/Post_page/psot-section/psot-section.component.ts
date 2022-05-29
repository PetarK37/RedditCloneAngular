import { Input,Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
@Component({
  selector: 'app-post-section',
  templateUrl: './psot-section.component.html',
  styleUrls: ['./psot-section.component.css']
})
export class PostSectionComponent implements OnInit {

  @Input() post!: PostResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
