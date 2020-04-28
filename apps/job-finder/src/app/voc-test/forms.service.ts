import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

@Injectable()
export class FormsService {
    userForm: FormGroup;
    clusterForm: FormGroup;
    ratingsForm: FormArray;
    constructor(private _formBuilder: FormBuilder) { }
    public initialize(): void {
        this.initUserForm();
        this.initClusterForm();
        this.initRatingsForm();
    }
    private initUserForm(): void {
        this.userForm = this._formBuilder.group({
            Age: new FormControl(null),
            Gender: new FormControl(),
            Residence: new FormControl()
        })
    }
    private initClusterForm(): void {

    }
    private initRatingsForm(): void {

    }
}