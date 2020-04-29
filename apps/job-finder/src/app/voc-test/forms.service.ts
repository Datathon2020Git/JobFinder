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
        this.clusterForm = this._formBuilder.group({
            clusters: new FormControl([])
        });
    }
    private initRatingsForm(): void {

    }
    public toggleCluster(name: string) {
        const control = this.clusterForm.get('clusters');
        const currentValue: string[] = control.value;
        let nextValue = currentValue;
        const index = currentValue.indexOf(name);
        if (index > -1) {
            nextValue.splice(index, 1);
        } else {
            nextValue.push(name)
        }
        control.patchValue(nextValue);
    }
}