import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AuthService} from '../shared/auth/auth.service';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent, ModelFormComponent} from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent, ModelFormComponent],
    providers: [AuthService]
})
export class LoginModule {
}
