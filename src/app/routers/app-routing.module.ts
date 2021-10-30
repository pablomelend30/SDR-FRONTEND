import { FormEnacterComponent } from './../components/landing-page/form-user-enacters/form-enacter/form-enacter.component';
import { AdminCriterionComponent } from './../components/admin-criterion/admin-criterion.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "../components/landing-page/landing-page.component";
import { LoginComponent } from "../components/login/login.component";
import { UsersComponent } from "../components/manager/users/users.component";
import { ProfileComponent } from "../components/profile/profile.component";
import { LoginGuard } from "../guards/login/login.guard";
import { NoLoginGuard } from "../guards/no-login/no-login.guard";
import { AsesoresEnactersComponent } from '../components/landing-page/form-user-enacters/asesores-enacters/asesores-enacters.component';
import { PatrocinadoresEnactersComponent } from '../components/landing-page/form-user-enacters/patrocinadores-enacters/patrocinadores-enacters.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: LandingPageComponent },
  {path: "asesor-form",component: AsesoresEnactersComponent,canActivate:[NoLoginGuard] },
  {path:"form-enacter",component:FormEnacterComponent,canActivate:[NoLoginGuard]},
  {path: "form-patrocinador",component: PatrocinadoresEnactersComponent,canActivate: [NoLoginGuard]},
  {path:"admin-criterion",component: AdminCriterionComponent,canActivate:[NoLoginGuard]},

  { path: "login", component: LoginComponent, canActivate: [NoLoginGuard] },
  { path: "admin/users", component: UsersComponent, canActivate: [LoginGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [LoginGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
