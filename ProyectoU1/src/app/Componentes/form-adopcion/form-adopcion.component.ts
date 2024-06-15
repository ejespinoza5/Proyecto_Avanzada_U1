import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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
      name: ['', Validators.required,Validators.maxLength(50)],
      lastName: ['', Validators.required],
      dni: ['', Validators.required],
      birthYear: ['', Validators.required],
      address: ['', Validators.required],
      address2: [''],
      postalCode: [''],
      civilStatus: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      phoneNumber2: [''],
      email: ['', [Validators.required, Validators.email]],
      familyMembers: ['', Validators.required],
      children: ['', Validators.required],
      numberOfChildren: [''],
      futureChildren: ['', Validators.required],
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
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.adoptionForm.valid) {
      const datosFormulario = this.adoptionForm.value;
      console.log(datosFormulario);
    } else {
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

  get additionalInfoField() {
    return this.adoptionForm.get('additionalInfo');
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