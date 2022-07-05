import { Input,Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { ImgService } from 'src/app/Services/img.service';
@Component({
  selector: 'app-post-section',
  templateUrl: './psot-section.component.html',
  styleUrls: ['./psot-section.component.css']
})
export class PostSectionComponent implements OnInit {

  @Input() post!: PostResponse;

  constructor(private imgService :ImgService) { }

  ngOnInit(): void {
  }

  getImg() : string{
    return this.imgService.getImg(this.post.imgPath);
  }


}
