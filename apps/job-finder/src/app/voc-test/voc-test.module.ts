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
import { FormsService } from './forms.service';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClusterBoxComponent } from './occ-clusters-form/cluster-box/cluster-box.component';
import { RatingBoxComponent } from './occ-rating-form/rating-box/rating-box.component';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

const MaterialModules = [
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSliderModule
]
@NgModule({
    declarations: [
        VocTestComponent,
        UserFormComponent,
        OccClustersFormComponent,
        OccRatingFormComponent,
        ClusterBoxComponent,
        RatingBoxComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        VocTestRoutingModule,
        ...MaterialModules,
    ],
    providers: [
        FormsService
    ]
})
export class VocTestModule {

}