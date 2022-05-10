import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Commponents/navigation-bar/navigation-bar.component';
import { IonicModule } from '@ionic/angular';
import { MainPagePostsComponent } from './Commponents/main-page-posts/main-page-posts.component';
import { PostCardComponent } from './Commponents/post-card/post-card.component';
import { MainPageAssideComponent } from './Commponents/main-page-asside/main-page-asside.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainPagePostsComponent,
    PostCardComponent,
    MainPageAssideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
