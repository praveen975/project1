import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FromComponent } from './from/from.component';
import { ToComponent } from './to/to.component';
import { ReversePipe } from './reverse.pipe';
import { HelloDirective } from './hello.directive';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    FromComponent,
    ToComponent,
    ReversePipe,
    HelloDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
