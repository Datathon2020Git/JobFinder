import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Injectable()
export class FormsService {
    userForm: FormGroup;
    clusterForm: FormGroup;
    ratingsForm: FormArray;
    descriptions: string[] = [
        'anatomical pathology technicians assist specialised doctors in pathology in conducting postmortem examinations keeping records of the samples specimens organs and the respective findings and taking care of their appropriate disposal under supervision following the orders of the doctor of medicine',
        'dental technicians manufacture dental custommade devices like bridges crowns dentures and appliances under the supervision of dental practitioners following their directions and specifications',
        'healthcare inspectors visit healthcare facilities to ensure proper care is given to all patients in accordance with legal requirements they also inspect if equipment processes and staff operate adequately to prevent the spreading of infections and diseases',
        'medical transcriptionists interpret dictated information from the doctor or other healthcare professionals and convert it into documents they create format and edit medical records for patients based on the provided data and take care to apply punctuation and grammar rules',
        'podiatrists are foot specialists who study foot physiology and pathology from a structural and functional standpoint they assess diagnose and treat physical sporting injuries rehabilitation medical and surgical problems of the foot and lower limb in their clinical practice podiatrists are active outside the clinical environment in research medicolegal and forensic activitiesÂ podiatrists act within the scope of their podiatry training experience and regulating authority of their member country',
        'anodising machine operators set up and tend anodising machines designed to provide otherwise finished metal workpieces usually aluminumbased with a durable anodic oxide corrosionresistant finishing coat by a electrolyctic passiviation process that increases the thickness of the natural oxide layer of the metal workpieces surface',
        'container equipment assemblers manufacture containers such as boilers or pressure vessels they read blueprints and technical drawings to assemble parts and to build piping and fittings',
        'furniture assemblers place together all parts of furniture and auxiliary items such as furniture legs and cushions they may also fit springs or special mechanisms furniture assemblers follow instructions or blueprints to assemble the furniture and use hand tools and power tools',
        'drill press operators set up and operate drill presses designed to cut excess material from or enlarge a hole in a fabricated workpiece using a hardened rotary multipointed cutting tool that inserts the drill into the workpiece axially',
        'booksewing machine operators tend a machine that stitches paper together to form a volume they check that signatures are inserted the right way and the machine does not jam'

    ]
    constructor(private _formBuilder: FormBuilder) {
        this.descriptions = this.descriptions.map(descr => descr[0].toUpperCase() + descr.substring(1) + '.')
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
        this.descriptions.forEach(
            description => this.ratingsForm.push(new FormControl(3, Validators.required))
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