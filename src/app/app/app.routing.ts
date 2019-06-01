import { ArtComponent } from './art/art.component';
import { InfoComponent } from './info/info.component';

export const AppRoutes: any = [
    { path: 'art', component: ArtComponent },
    { path: 'info', component: InfoComponent },
    { path: '',   redirectTo: '/art', pathMatch: 'full' }
];

export const AppComponents: any = [
    ArtComponent,
    InfoComponent
];
