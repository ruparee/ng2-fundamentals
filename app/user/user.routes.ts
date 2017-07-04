/**
 * Created by erupare on 03/07/2017.
 */
import { ProfileComponent } from './profile.component'
import {LoginComponent} from "./login.component";


export const userRoutes = [
    // /user/profile
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]