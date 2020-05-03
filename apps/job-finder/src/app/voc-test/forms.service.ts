import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable()
export class FormsService {
    userForm: FormGroup;
    clusterForm: FormGroup;
    ratingsForm: FormArray;
    occupations: { title: string, description: string }[] = [
        {
            title: 'healthcare consultant',
            description: 'Healthcare consultants advise health care organisations on the development of plans to improve patient care and safety. They analyse health care policies and identify issues, and aid in the development of improvement strategies.'
        },
        {
            title: 'public health policy officer',
            description: "Public health policy officers develop and implement strategies for the improvement of a community's health care policy. They advise governments on policy changes and identify problems in current health care policies."
        },
        {
            title: 'policy officer',
            description: 'Policy officers research, analyse and develop policies in various public sectors, and shape and implement these policies to improve the existing regulation around the sector. They evaluate effects of existing policies and report findings to the government and members of the public. Policy officers work closely with partners, external organisations or other stakeholders and provide them with regular updates.'
        },
        {
            title: 'social services manager',
            description: 'Social services managers have the responsibility for strategic and operational leadership and management of staff teams and resources within and or across social services. They are responsible for the implementation of legislation and policies relating to, for example, decisions about vulnerable people.  They promote social work and social care values and ethics, equality and diversity, and relevant codes guiding practice. They are responsible for liaising with other professionals in criminal justice, education and health. They can be responsible for contributing to local and national policy development.'
        },
        {
            title: 'youth programme director',
            description: "Youth programme directors develop and implement programmes and policies to improve and ensure youths' well-being. They facilitate communication with and between educational, recreational, counselling or other youth related institutions, organise events for youths and families, and promote social mobility and awareness.",
        },
        {
            title: "social service consultant",
            description: "Social service consultants aid in the development of policy and procedure for social service programs. They research social service programs and identify areas for improvement, as well as aid in the development of new programs. They fulfil advisory functions for social service organisations."
        },
        {
            title: "youth centre manager",
            description: "Youth centre managers plan and supervise the operations of children and youth homes which provide care and counselling services. They assess the needs for youths in the community, develop and implement pedagogical methods, and develop programs for the improvement of youth care in the centre."
        },
        {
            title: "social services policy officer",
            description: "Social services policy officers research, analyse and develop social services policies and implement these policies and services to improve circumstances of disadvantaged and vulnerable members of society such as children and elderly people. They work in the administration of social services and stay in contact with organisations and other stakeholders and provide them with regular updates."
        },
        {
            title: "Special-interest groups' officials represent and act on behalf of special-interest groups such as trade unions, employer organisations, trade and industry associations, sports associations and humanitarian organisations. They develop policies and ensure their implementation. Special-interest groups' officials speak for their members in negotiations about topics such as working conditions and safety.",
            description: "Special-interest groups' officials represent and act on behalf of special-interest groups such as trade unions, employer organisations, trade and industry associations, sports associations and humanitarian organisations. They develop policies and ensure their implementation. Special-interest groups' officials speak for their members in negotiations about topics such as working conditions and safety."
        },
        {
            title: "service manager",
            description: "Service managers are responsible for the supervision and coordination of the provision of different professional and technical services to customers. They ensure a smooth interaction with clients and high levels of satisfaction post-service.Â This occupation includes the provision of policing, correctional, library, legal and fire services."
        }
    ]
    constructor(private _formBuilder: FormBuilder) {

        this.occupations = this.occupations.map(occ => {
            occ.title = occ.title[0].toUpperCase() + occ.title.substring(1)
            return occ
        })
    }
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
        this.ratingsForm = this._formBuilder.array([])
        this.occupations.forEach(
            occupation => this.ratingsForm.push(new FormControl(3, Validators.required))
        )
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