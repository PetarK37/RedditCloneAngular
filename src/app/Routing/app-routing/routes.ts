import { Routes } from '@angular/router';
import { CommunityWindowComponent } from 'src/app/Commponents/Community_page/community-window/community-window.component';

import { MainWindowComponent } from 'src/app/Commponents/Main_Page/main-window/main-window.component';
import { PostWindowComponent } from 'src/app/Commponents/Post_page/post-window/post-window.component';


export const routes :Routes = [
	{path: 'Home', component: MainWindowComponent},
	{path: 'Community/:id',component: CommunityWindowComponent},
	{path: 'Post/:id',component: PostWindowComponent},
	{path: '', redirectTo: 'Home', pathMatch: 'full'},
];