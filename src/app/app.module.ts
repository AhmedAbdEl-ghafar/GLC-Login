import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule ,} from '@angular/forms';
import { TestReqComponent } from './test-req/test-req.component';
import { TestReq2Component } from './test-req2/test-req2.component';



const appRoute:Routes = [
  {path:'',component:AppComponent},
  {path:'login',component:LoginComponent},
  {path:'req',component:TestReqComponent},
  {path:'req2',component:TestReq2Component}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestReqComponent,
    TestReq2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
