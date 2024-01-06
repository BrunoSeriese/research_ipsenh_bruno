import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss'],
})
export class ManageUsersComponent implements OnInit {
  public selectAll: boolean = false;
  public selectedUsers: User[] | null = null;

  public openAdminModal: boolean = false;
  public openAddUserModal: boolean = false;
  public openDeletionModal: boolean = false;
  public openEditUserModal: boolean = false;

  public validationError: string = "";

  public users: User[] = [
    {
      username: "Henk",
      role: "admin"
    },
    {
      username: "Jan",
      role: "admin"
    },
  ]

  private tmpPassword: string | undefined;

  private getPasswordControl(): UntypedFormControl {
    return new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(63),
      this.regexValidator("capital", /^(?=.*[A-Z]).*$/), // Password must contain at least one uppercase letter
      this.regexValidator("lowercase", /^(?=.*[a-z]).*$/), // Password must contain at least one lowercase letter
      this.regexValidator("number", /^(?=.*[0-9]).*$/), // Password must contain at least one number
      this.regexValidator("special", /^(?=.*[!@#$%^&*:\[\]{}<>/\\()_\-+=|;'',.?]).*$/), // Password must contain at least one special character
    ]);
  }

  private getConfirmPasswordControl(): UntypedFormControl {
    return new UntypedFormControl('', [this.passwordMatchValidator()]);
  }

  public adminGroup: UntypedFormGroup = new UntypedFormGroup({
    password: this.getPasswordControl(),
    confirmPassword: this.getConfirmPasswordControl()
  });

  public addUserGroup: UntypedFormGroup = new UntypedFormGroup({
    username: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(63)
    ]),
    password: this.getPasswordControl(),
    confirmPassword: this.getConfirmPasswordControl()
  });

  public editUserGroup: UntypedFormGroup = new UntypedFormGroup({
    password: this.getPasswordControl(),
    confirmPassword: this.getConfirmPasswordControl(),
    role: new UntypedFormControl('', [this.roleValidator()])

  });

  constructor() {

  }

  ngOnInit(): void {
    this.adminGroup.valueChanges.subscribe(() => {
      this.tmpPassword = this.adminGroup.get("password")?.value;
      this.validationError = "";
      // console.log(this.adminGroup.get("password")?.errors);
      console.log(this.adminGroup.get("confirmPassword")?.errors);
    });

    this.addUserGroup.valueChanges.subscribe(() => {
      this.tmpPassword = this.addUserGroup.get("password")?.value;
      this.validationError = "";
      // console.log(this.addUserGroup.get("password")?.errors);
    });

    this.editUserGroup.valueChanges.subscribe(() => {
      this.tmpPassword = this.editUserGroup.get("password")?.value;
      this.validationError = "";
      console.log(this.editUserGroup);
    });
  }

  public getUsers() {
    return this.users;
  }

  public toggleAdminModal() {
    this.openAdminModal = !this.openAdminModal;
  }

  public toggleAddUserModal() {
    this.openAddUserModal = !this.openAddUserModal;
  }

  public toggleDeletionModal() {
    this.openDeletionModal = !this.openDeletionModal;
  }

  public toggleEditUserModal() {
    this.openEditUserModal = !this.openEditUserModal;
  }

  public selectAllCheckboxChanged() {
    for (let user of this.users) {
        user.isSelected = this.selectAll;
    }
    this.checkIfUserSelected();
  }

  public checkboxChanged() {
    this.selectAll = this.users.every((user) => user.isSelected);
    this.checkIfUserSelected();
  }

  private checkIfUserSelected() {
    this.selectedUsers = this.users.filter((user) => user.isSelected);
    console.log(this.selectedUsers);
  }

  public submitAdminForm() {
    if (this.adminGroup.valid) {
      console.log(this.adminGroup.value);
    } else {
      this.validationError = "Invalid form";
    }
    this.toggleAdminModal();
  }

  public submitAddUserForm() {
    if (this.addUserGroup.valid) {
      console.log(this.addUserGroup.value);
    } else {
      this.validationError = "Invalid form";
    }
    this.toggleAddUserModal();
  }

  public deleteUsers() {
    console.log("delete users");
    this.toggleDeletionModal();
  }

  public editUser() {
    console.log("edit user");
    this.toggleEditUserModal();
  }

  private regexValidator(key: string, regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      if (regExp.test(control.value)) {
        return null;
      }

      return {
        [key]: true
      }
    }
  }

  private passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === this.tmpPassword) {
        return null;
      }

      return {
        "passwordMatch": true
      }
    }
  }

  private roleValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const roles: string[] = ["monitoring", "policymaker", "management", "impersonator", "none"]
      if (roles.includes(control.value)) {
        return null;
      }

      return {
        "role": true
      }
    }
  }
}
