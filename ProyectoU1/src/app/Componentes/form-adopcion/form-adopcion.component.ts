import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, ValidatorFn, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';


export function onlyNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const onlyNumbers = /^[0-9]+$/.test(value);

    return onlyNumbers ? null : { 'onlyNumbers': { value } };
  };
}

export function noRepeatedDigitsValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      const isRepeated = /^(\d)\1+$/.test(value);
      return isRepeated ? { 'noRepeatedDigits': { value } } : null;
  };
}

export function adultAgeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    const birthDate = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age >= 18 ? null : { 'adultAge': { value } };
  };
}


@Component({
  selector: 'app-form-adopcion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-adopcion.component.html',
  styleUrls: ['./form-adopcion.component.scss']
})
export class FormAdopcionComponent {
  adoptionForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();

  }

  private buildForm(): void {
    this.adoptionForm = this.fb.group({
      name: new FormControl ('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl ('', Validators.required),
      dni: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10), onlyNumbersValidator(), noRepeatedDigitsValidator()]),
      birthYear: ['', [Validators.required, adultAgeValidator()]],
      address: ['', Validators.required],
      address2: [''],
      postalCode: ['', onlyNumbersValidator()],
      civilStatus: ['', Validators.required],
      phoneNumber: ['', [Validators.required, onlyNumbersValidator()]],
      phoneNumber2: [''],
      email: ['', [Validators.required, Validators.email]],
      familyMembers: ['', Validators.required],
      children: ['', Validators.required],
      numberOfChildren: [{ value: '', disabled: true }],
      futureChildren: [{ value: '', disabled: true }],
      occupation: ['', Validators.required],
      workHours: ['', Validators.required],
      vacations: ['', Validators.required],
      houseType: ['', Validators.required],
      houseOwner: ['', Validators.required],
      housePermission: [''],
      yard: ['', Validators.required],
      fence: [''],
      petType: ['', Validators.required],
      reason: ['', Validators.required],
      previousPets: ['', Validators.required],
      previousPetsDetails: [''],
      currentPets: ['', Validators.required],
      currentPetDetails: [''],
      petsNeutered: [''],
      petsVaccinated: [''],
      financialAbility: ['', Validators.required],
      additionalInfo: ['', Validators.required]
    });

    this.adoptionForm.get('children')?.valueChanges.subscribe(value => {
      this.updateValidators(value);
    });
  }

  private updateValidators(children: string): void {
    const numberOfChildrenControl = this.adoptionForm.get('numberOfChildren');
    const futureChildrenControl = this.adoptionForm.get('futureChildren');

    if (numberOfChildrenControl && futureChildrenControl) {
      if (children === 'Sí') {
        numberOfChildrenControl.setValidators([Validators.required]);
        futureChildrenControl.clearValidators();
        futureChildrenControl.setValue('');
        futureChildrenControl.disable();
        numberOfChildrenControl.enable();
      } else {
        futureChildrenControl.setValidators([Validators.required]);
        numberOfChildrenControl.clearValidators();
        numberOfChildrenControl.setValue('');
        numberOfChildrenControl.disable();
        futureChildrenControl.enable();
      }
  
      numberOfChildrenControl.updateValueAndValidity();
      futureChildrenControl.updateValueAndValidity();
    }
}


  onDniKeyDown(event: KeyboardEvent) {
    const allowedKeys = [8, 9, 46];
    const keyCode = event.keyCode;
  
    if (!allowedKeys.includes(keyCode)) {
      const allowedChars = /[0-9]/;
      const key = event.key;
  
      if (!allowedChars.test(key)) {
        event.preventDefault();
      }
    }
  }
  

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.adoptionForm.valid) {
      const datosFormulario = this.adoptionForm.value;
      console.log(datosFormulario);
    } else {
      console.log('Formulario inválido');
      this.adoptionForm.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.adoptionForm.reset();
  }


  get nameField() {
    return this.adoptionForm.get('name');
  }

  get lastNameField() {
    return this.adoptionForm.get('lastName');
  }

  get dniField() {
    return this.adoptionForm.get('dni');
  }

  get birthYearField() {
    return this.adoptionForm.get('birthYear');
  }

  get addressField() {
    return this.adoptionForm.get('address');
  }

  get civilStatusField() {
    return this.adoptionForm.get('civilStatus');
  }

  get phoneNumberField() {
    return this.adoptionForm.get('phoneNumber');
  }

  get emailField() {
    return this.adoptionForm.get('email');
  }

  get familyMembersField() {
    return this.adoptionForm.get('familyMembers');
  }

  get childrenField() {
    return this.adoptionForm.get('children');
  }

  get futureChildrenField() {
    return this.adoptionForm.get('futureChildren');
  }

  get occupationField() {
    return this.adoptionForm.get('occupation');
  }

  get workHoursField() {
    return this.adoptionForm.get('workHours');
  }

  get vacationsField() {
    return this.adoptionForm.get('vacations');
  }

  get houseTypeField() {
    return this.adoptionForm.get('houseType');
  }

  get houseOwnerField() {
    return this.adoptionForm.get('houseOwner');
  }

  get yardField() {
    return this.adoptionForm.get('yard');
  }

  get petTypeField() {
    return this.adoptionForm.get('petType');
  }

  get reasonField() {
    return this.adoptionForm.get('reason');
  }

  get previousPetsField() {
    return this.adoptionForm.get('previousPets');
  }

  get currentPetsField() {
    return this.adoptionForm.get('currentPets');
  }

  get financialAbilityField() {
    return this.adoptionForm.get('financialAbility');
  }

  get postalCodeField() {
    return this.adoptionForm.get('postalCode');
  }

  get address2Field() {
    return this.adoptionForm.get('address2');
  }

  get phoneNumber2Field() {
    return this.adoptionForm.get('phoneNumber2');
  }

  get numberOfChildrenField() {
    return this.adoptionForm.get('numberOfChildren');
  }

  get housePermissionField() {
    return this.adoptionForm.get('housePermission');
  }

  get fenceField() {
    return this.adoptionForm.get('fence');
  }

  get previousPetsDetailsField() {
    return this.adoptionForm.get('previousPetsDetails');
  }

  get currentPetDetailsField() {
    return this.adoptionForm.get('currentPetDetails');
  }

  get petsNeuteredField() {
    return this.adoptionForm.get('petsNeutered');
  }

  get petsVaccinatedField() {
    return this.adoptionForm.get('petsVaccinated');
  }

  get petsPermissionField() {
    return this.adoptionForm.get('petsPermission');
  }

  get petsPermissionDetailsField() {
    return this.adoptionForm.get('petsPermissionDetails');
  }

}