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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AlertModalComponent } from './Commponents/Alert/alert-modal/alert-modal.component';
import { CretePostBarComponent } from './Commponents/Posts/crete-post-bar/crete-post-bar.component';
import { LoggedInNavigationComponent } from './Commponents/Navigation/logged-in-navigation/logged-in-navigation.component';
import { LoggedInNavMenuComponent } from './Commponents/Navigation/logged-in-nav-menu/logged-in-nav-menu.component';
import { TokenInterceptor } from './Interceptors/TokenInterceptor';
import { CommentService } from './Services/comment.service';
import { AuthenticationServiceService } from './Services/authentication-service.service';
import { CommunityService } from './Services/community.service';
import { PostServiceService } from './Services/post-service.service';
import { CreateEditPostComponent } from './Commponents/Create_post_page/create-edit-post/create-edit-post.component';
import { ConfirmDialogComponent } from './Commponents/Alert/confirm-dialog/confirm-dialog.component';
import { SettingsWindowUserComponent } from './Commponents/Settings-window/settings-window-user/settings-window-user.component';
import { UserSettingsSidebarComponent } from './Commponents/Settings-window/user-settings-sidebar/user-settings-sidebar.component';
import { CreateCommunityComponent } from './Commponents/Create-community-window/create-community/create-community.component';
import { EditPasswordComponent } from './Commponents/Settings-window/edit-profile/edit-password.component';
import { UserProfileWindowComponent } from './Commponents/Settings-window/user-profile-window/user-profile-window.component';
import { ModSettingsWindowComponent } from './Commponents/Mod-window/mod-settings-window/mod-settings-window.component';
import { NotFoundWindowComponent } from './Commponents/Error-page/not-found-window/not-found-window.component';
import { CommunitySettingsWindowComponent } from './Commponents/Mod-window/community-settings-window/community-settings-window.component';
import { ModSettingsAssideComponent } from './Commponents/Mod-window/mod-settings-asside/mod-settings-asside.component';
import { CommunitySettingsModWindowComponent } from './Commponents/Mod-window/community-settings-mod-window/community-settings-mod-window.component';
import { CommunityUsersWindowComponent } from './Commponents/Mod-window/community-users-window/community-users-window.component';
import { ReportAlertComponent } from './Commponents/Alert/report-alert/report-alert.component';
import { CommunityReportsWindowComponent } from './Commponents/Mod-window/community-reports-window/community-reports-window.component';
import { CommentPreviewComponent } from './Commponents/Alert/comment-preview/comment-preview.component';
import { PostPreviewComponent } from './Commponents/Alert/post-preview/post-preview.component';
import { CrateEditCommentCardComponent } from './Commponents/Comment/crate-edit-comment-card/crate-edit-comment-card.component';
import { NotLoggedInComponent } from './Commponents/Error-page/not-logged-in/not-logged-in.component';
import { NotAutjorizedComponent } from './Commponents/Error-page/not-autjorized/not-autjorized.component';
import { AdminSettingsWindowComponent } from './Commponents/Admin-window/admin-settings-window/admin-settings-window.component';
import { SusspendAlertComponent } from './Commponents/Alert/susspend-alert/susspend-alert.component';
import { NgRandomPipeModule,NgRoundPipeModule  } from 'angular-pipes';



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
    RegisterModalComponent,
    AlertModalComponent,
    CretePostBarComponent,
    LoggedInNavigationComponent,
    LoggedInNavMenuComponent,
    CreateEditPostComponent,
    ConfirmDialogComponent,
    SettingsWindowUserComponent,
    UserSettingsSidebarComponent,
    CreateCommunityComponent,
    EditPasswordComponent,
    UserProfileWindowComponent,
    ModSettingsWindowComponent,
    NotFoundWindowComponent,
    CommunitySettingsWindowComponent,
    ModSettingsAssideComponent,
    CommunitySettingsModWindowComponent,
    CommunityUsersWindowComponent,
    ReportAlertComponent,
    CommunityReportsWindowComponent,
    CommentPreviewComponent,
    PostPreviewComponent,
    CrateEditCommentCardComponent,
    NotLoggedInComponent,
    NotAutjorizedComponent,
    AdminSettingsWindowComponent,
    SusspendAlertComponent,
  ],
  imports: [
    NgRoundPipeModule ,
    NgRandomPipeModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  providers:  [ 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
      CommentService,
      AuthenticationServiceService,
      CommunityService,
      PostServiceService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
