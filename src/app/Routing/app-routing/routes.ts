import { Routes } from '@angular/router';
import { CommunityWindowComponent } from 'src/app/Commponents/Community_page/community-window/community-window.component';
import { CreateCommunityComponent } from 'src/app/Commponents/Create-community-window/create-community/create-community.component';
import { CreateEditPostComponent } from 'src/app/Commponents/Create_post_page/create-edit-post/create-edit-post.component';

import { MainWindowComponent } from 'src/app/Commponents/Main_Page/main-window/main-window.component';
import { PostWindowComponent } from 'src/app/Commponents/Post_page/post-window/post-window.component';
import { EditProfileComponent } from 'src/app/Commponents/Settings-window/edit-profile/edit-profile.component';
import { SettingsWindowUserComponent } from 'src/app/Commponents/Settings-window/settings-window-user/settings-window-user.component';
import { UserProfileWindowComponent } from 'src/app/Commponents/Settings-window/user-profile-window/user-profile-window.component';


export const routes :Routes = [
	{path: 'Home', component: MainWindowComponent},
	{path: 'Community/Create', component: CreateCommunityComponent},
	{path: 'Community/:id',component: CommunityWindowComponent},
	{path: 'Post/Create',component: CreateEditPostComponent},
	{path: 'Post/:id',component: PostWindowComponent},
	{path: 'Users/About',component: SettingsWindowUserComponent,
		children: [
			{path: 'Me',component: UserProfileWindowComponent},
			{path: 'Edit',component: EditProfileComponent}
		]},
	{path: '', redirectTo: 'Home', pathMatch: 'full'}];