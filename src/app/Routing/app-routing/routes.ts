import { Routes } from '@angular/router';
import { CommunityWindowComponent } from 'src/app/Commponents/Community_page/community-window/community-window.component';
import { CreateCommunityComponent } from 'src/app/Commponents/Create-community-window/create-community/create-community.component';
import { CreateEditPostComponent } from 'src/app/Commponents/Create_post_page/create-edit-post/create-edit-post.component';
import { NotFoundWindowComponent } from 'src/app/Commponents/Error-page/not-found-window/not-found-window.component';

import { MainWindowComponent } from 'src/app/Commponents/Main_Page/main-window/main-window.component';
import { CommunitySettingsModWindowComponent } from 'src/app/Commponents/Mod-window/community-settings-mod-window/community-settings-mod-window.component';
import { CommunitySettingsWindowComponent } from 'src/app/Commponents/Mod-window/community-settings-window/community-settings-window.component';
import { ModSettingsWindowComponent } from 'src/app/Commponents/Mod-window/mod-settings-window/mod-settings-window.component';
import { PostWindowComponent } from 'src/app/Commponents/Post_page/post-window/post-window.component';
import { EditPasswordComponent} from 'src/app/Commponents/Settings-window/edit-profile/edit-password.component';
import { SettingsWindowUserComponent } from 'src/app/Commponents/Settings-window/settings-window-user/settings-window-user.component';
import { UserProfileWindowComponent } from 'src/app/Commponents/Settings-window/user-profile-window/user-profile-window.component';


export const routes :Routes = [
	{path: 'Home', component: MainWindowComponent},
	{path: 'Community/Create', component: CreateCommunityComponent},
	{path: 'Community/:id',component: CommunityWindowComponent},
	{path: 'Post/Create',component: CreateEditPostComponent},
	{path: 'Post/:id',component: PostWindowComponent},
	{path: 'Users/:id',component: UserProfileWindowComponent},
	{path: 'Users/About',component: SettingsWindowUserComponent,
		children: [
			{path: 'Me',component: UserProfileWindowComponent},
			{path: 'Edit',component: EditPasswordComponent}
		]},
	{path: 'Moderator/Communities',component: ModSettingsWindowComponent},
	{path: 'Moderator/Communities/:id',component: CommunitySettingsModWindowComponent,
	children: [
		{path: '',component: CommunitySettingsWindowComponent},
		// {path: 'Users',component: EditPasswordComponent},
		// {path : 'Reports',}
	]},
	{path: '', redirectTo: 'Home', pathMatch: 'full'},
	{path: '**', component: NotFoundWindowComponent}];