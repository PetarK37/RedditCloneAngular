import { Component, OnInit } from '@angular/core';
import { CommunitySearchResponse } from 'src/app/Model/community';
import { PostSearchResponse } from 'src/app/Model/post';
import { SearchService } from 'src/app/Services/search.service';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchResaults!: any[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.searchResults$.subscribe((results: CommunitySearchResponse[]| PostSearchResponse[]) => {
      this.searchResaults = results;
    });
  }

}
