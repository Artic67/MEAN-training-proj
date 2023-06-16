import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AboutComponent], // components, directives, pipes
    imports: [RouterModule], // modules
    exports: [AboutComponent], // you can export items from declarations and imports
    providers: [], // services
})
export class AboutModule {}