import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Routing/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Commponents/Navigation/navigation-bar/navigation-bar.component';
import { IonicModule } from '@ionic/angular';
import { MainPagePostsComponent } from './Commponents/Main_Page/main-page-posts/main-page-posts.component';
import { PostCardComponent } from './Commponents/Posts/Post_card/post-card/post-card.component';
import { MainPageAssideComponent } from './Commponents/Main_Page/main-page-asside/main-page-asside.component';
import { SortBarComponent } from './Commponents/Posts/sort-bar/sort-bar.component';
import { PostCardKarmaComponent } from './Commponents/Posts/Post_card/post-card-karma/post-card-karma.component';
import { MainWindowComponent } from './Commponents/Main_Page/main-window/main-window.component';
import { HttpClientModule } from '@angular/common/http';
import { CommunityWindowComponent } from './Commponents/Community_page/community-window/community-window.component';
import { CommunityPagePostsComponent } from './Commponents/Community_page/community-page-posts/community-page-posts.component';
import { CommunityPageAssideComponent } from './Commponents/Community_page/community-page-asside/community-page-asside.component';
import { AboutCommunityCardComponent } from './Commponents/Community/about-community-card/about-community-card.component';
import { CommunityRulesCardComponent } from './Commponents/Community/community-rules-card/community-rules-card.component';
import { CommunityFlairsCardComponent } from './Commponents/Community/community-flairs-card/community-flairs-card.component';
import { CommunityTitleBarComponent } from './Commponents/Community_page/community-title-bar/community-title-bar.component';
import { PostWindowComponent } from './Commponents/Post_page/post-window/post-window.component';
import { PostPageContentComponent } from './Commponents/Post_page/post-page-content/post-page-content.component';
import { PostPageAssideComponent } from './Commponents/Post_page/post-page-asside/post-page-asside.component';
import { PostTitleRowComponent } from './Commponents/Posts/post-title-row/post-title-row.component';
import { PostSectionComponent } from './Commponents/Post_page/psot-section/psot-section.component';
import { PostKarmaRowComponent } from './Commponents/Post_page/psot-karma-row/psot-karma-row.component';
import { CommentSectionComponent } from './Commponents/Post_page/comment-section/comment-section.component';
import { CommentCardComponent } from './Commponents/Comment/comment-card/comment-card.component';
import { CommentKarmaRowComponent } from './Commponents/Comment/comment-karma-row/comment-karma-row.component';
import { WeekAgoPipe } from './Pipes/week-ago.pipe';
import { LoginModalComponent } from './Commponents/Login/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterModalComponent } from './Commponents/Register/register-modal/register-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainPagePostsComponent,
    PostCardComponent,
    MainPageAssideComponent,
    SortBarComponent,
    PostCardKarmaComponent,
    MainWindowComponent,
    CommunityWindowComponent,
    CommunityPagePostsComponent,
    CommunityPageAssideComponent,
    AboutCommunityCardComponent,
    CommunityRulesCardComponent,
    CommunityFlairsCardComponent,
    CommunityTitleBarComponent,
    PostWindowComponent,
    PostPageContentComponent,
    PostPageAssideComponent,
    PostTitleRowComponent,
    PostSectionComponent,
    PostKarmaRowComponent,
    CommentSectionComponent,
    CommentCardComponent,
    CommentKarmaRowComponent,
    WeekAgoPipe,
    LoginModalComponent,
    RegisterModalComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
