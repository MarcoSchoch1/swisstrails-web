import { Routes } from '@angular/router';
import { TrailList } from './trail/trail-list/trail-list';
import { TrailDetail } from './trail/trail-detail/trail-detail';
import { NotFound } from './not-found/not-found';
import { AddTrail } from './trail/add-trail/add-trail';

export const routes: Routes = [
    { path: '', component: TrailList },
    { path: 'trails/add', component: AddTrail },
    { path: 'trails/:id', component: TrailDetail },
    { path: '**', component: NotFound }
];
