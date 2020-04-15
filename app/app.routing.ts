import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UserListComponent
            },
        //     {
        //         path: 'create',
        //         component: UserCreateComponent
        //     },
        //     {
        //         path: ':id',
        //         component: UserSingleComponent
        //     },
        //     {
        //         path: ':id/edit',
        //         component: UserEditComponentß
        //     }
        ]
    }
];

export const  routing = RouterModule.forRoot(routes)