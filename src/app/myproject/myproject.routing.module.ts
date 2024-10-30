import { Routes,RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { ContentComponent } from "./content/content.component";




const routes:Routes=[{path:'content',component:ContentComponent}];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class myprojectrouting{

}
