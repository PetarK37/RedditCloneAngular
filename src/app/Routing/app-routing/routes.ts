import { Routes } from '@angular/router';
import { AdminSettingsWindowComponent } from 'src/app/Commponents/Admin-window/admin-settings-window/admin-settings-window.component';
import { CommunityWindowComponent } from 'src/app/Commponents/Community_page/community-window/community-window.component';
import { CreateCommunityComponent } from 'src/app/Commponents/Create-community-window/create-community/create-community.component';
import { CreateEditPostComponent } from 'src/app/Commponents/Create_post_page/create-edit-post/create-edit-post.component';
import { NotAutjorizedComponent } from 'src/app/Commponents/Error-page/not-autjorized/not-autjorized.component';
import { NotFoundWindowComponent } from 'src/app/Commponents/Error-page/not-found-window/not-found-window.component';
import { NotLoggedInComponent } from 'src/app/Commponents/Error-page/not-logged-in/not-logged-in.component';
import { MainWindowComponent } from 'src/app/Commponents/Main_Page/main-window/main-window.component';
import { CommunityReportsWindowComponent } from 'src/app/Commponents/Mod-window/community-reports-window/community-reports-window.component';
import { CommunitySettingsModWindowComponent } from 'src/app/Commponents/Mod-window/community-settings-mod-window/community-settings-mod-window.component';
import { CommunitySettingsWindowComponent } from 'src/app/Commponents/Mod-window/community-settings-window/community-settings-window.component';
import { CommunityUsersWindowComponent } from 'src/app/Commponents/Mod-window/community-users-window/community-users-window.component';
import { ModSettingsWindowComponent } from 'src/app/Commponents/Mod-window/mod-settings-window/mod-settings-window.component';
import { PostWindowComponent } from 'src/app/Commponents/Post_page/post-window/post-window.component';
import { EditPasswordComponent} from 'src/app/Commponents/Settings-window/edit-profile/edit-password.component';
import { SettingsWindowUserComponent } from 'src/app/Commponents/Settings-window/settings-window-user/settings-window-user.component';
import { UserProfileWindowComponent } from 'src/app/Commponents/Settings-window/user-profile-window/user-profile-window.component';
import { isLoggedInGuard } from 'src/app/Guard/isLoggedInGuard';
import { RoleGuard } from 'src/app/Guard/RoleGuard';


export const routes :Routes = [
	{path: 'Home', component: MainWindowComponent},
	{path: 'Community/Create', component: CreateCommunityComponent,canActivate: [isLoggedInGuard,RoleGuard],data: {expectedRoles: 'ROLE_ADMIN|ROLE_USER'}},
	{path: 'Community/:id',component: CommunityWindowComponent},
	{path: 'Post/Create',component: CreateEditPostComponent,canActivate: [isLoggedInGuard,RoleGuard],data: {expectedRoles: 'ROLE_ADMIN|ROLE_USER'}},
	{path: 'Post/:id',component: PostWindowComponent},
	{path: 'Users/:id',component: UserProfileWindowComponent},
	{path: 'Users/About',component: SettingsWindowUserComponent ,canActivate: [isLoggedInGuard,RoleGuard],data: {expectedRoles: 'ROLE_ADMIN|ROLE_USER'},
	children: [
		{path: 'Me',component: UserProfileWindowComponent},
		{path: 'Edit',component: EditPasswordComponent}
	]},
	{path: 'Admin/Settings',component: AdminSettingsWindowComponent ,canActivate: [isLoggedInGuard,RoleGuard],data: {expectedRoles: 'ROLE_ADMIN'}},
	{path: 'Moderator/Communities',component: ModSettingsWindowComponent ,canActivate: [isLoggedInGuard,RoleGuard],data: {expectedRoles: 'ROLE_ADMIN|ROLE_USER'}},
	{path: 'Moderator/Communities/:id',component: CommunitySettingsModWindowComponent,canActivate: [isLoggedInGuard,RoleGuard],data: {expectedRoles: 'ROLE_ADMIN|ROLE_USER'},
	children: [
		{path: '',component: CommunitySettingsWindowComponent},
		{path: 'Users',component: CommunityUsersWindowComponent},
		{path : 'Reports', component: CommunityReportsWindowComponent}
	]},
	{path: 'notLoggedIn', component: NotLoggedInComponent},
	{path: 'NotAuthorized', component : NotAutjorizedComponent},
	{path: '', redirectTo: 'Home', pathMatch: 'full'},
	{path: '**', component: NotFoundWindowComponent}];