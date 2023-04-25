import {Input, Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/Model/post';
import { ImgService } from 'src/app/Services/img.service';
import { SearchService } from 'src/app/Services/search.service';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/Services/pdf.service';

@Component({
  selector: 'app-post-title-row',
  templateUrl: './post-title-row.component.html',
  styleUrls: ['./post-title-row.component.css']
})
export class PostTitleRowComponent implements OnInit {

  @Input() post!: PostResponse;
  constructor(private imgService :ImgService,private searchService : SearchService,private router : Router,private pdfService : PdfService) { }

  ngOnInit(): void {
  }

  getImg() : string{
    return this.imgService.getImg(this.post.postedBy.avatarUrl);
  }

  getPdf(){
    return this.pdfService.getPdf(this.post.pdfFileName)
  }


  search(){
    const searchParam : Record<string, any> = {fuzzy: false,logic: "AND",flair: this.post.hasAFlair.name}
      this.searchService.search(searchParam,this.post.community.id.toString()).subscribe(res => {
        if(res){
          this.router.navigate(['/Search']);
        }
      })  
    }

}
