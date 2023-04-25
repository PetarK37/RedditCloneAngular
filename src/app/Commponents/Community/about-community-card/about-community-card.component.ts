import { Component, Input, OnInit } from '@angular/core';
import { CommunityResponse } from 'src/app/Model/community';
import { PdfService } from 'src/app/Services/pdf.service';

@Component({
  selector: 'app-about-community-card',
  templateUrl: './about-community-card.component.html',
  styleUrls: ['./about-community-card.component.css']
})
export class AboutCommunityCardComponent implements OnInit {

  @Input() community!: CommunityResponse;
  
  constructor(private pdfService : PdfService) { }

  ngOnInit(): void {
  }

  getPdf(){
    return this.pdfService.getPdf(this.community.pdfFileName)
  }

}
