import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VocTestRoutingModule } from './voc-test.routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserFormComponent } from './user-form/user-form.component';
import { VocTestComponent } from './voc-test.component';
import { MatButtonModule } from '@angular/material/button';
import { OccClustersFormComponent } from './occ-clusters-form/occ-clusters-form.component';
import { OccRatingFormComponent } from './occ-rating-form/occ-rating-form.component';

const MaterialModules = [
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule
]
@NgModule({
    declarations: [
        VocTestComponent,
        UserFormComponent,
        OccClustersFormComponent,
        OccRatingFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VocTestRoutingModule,
        ...MaterialModules,
    ],
})
export class VocTestModule {

}