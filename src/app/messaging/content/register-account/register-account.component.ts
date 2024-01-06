import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';

import { HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public currentStep = 1;
  public totalSteps = 2;

  private customQueueRequirements = [Validators.required, Validators.minLength(5), Validators.maxLength(20)]

  public formGroup: UntypedFormGroup = new UntypedFormGroup({
    userAccount: new UntypedFormGroup({
      formUsername: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      formPassword: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
      ]),
      formConfirmPassword: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
      ]),
    }),
    customizedQueue: new UntypedFormGroup({
      projectName: new UntypedFormControl('', this.customQueueRequirements),
      exchangeName: new UntypedFormControl('', this.customQueueRequirements),
      queueName: new UntypedFormControl('', this.customQueueRequirements),
      routingKey: new UntypedFormControl('', this.customQueueRequirements)
    })
  })

  comparePasswords() {
    const formPassword = this.formGroup.get('userAccount.formPassword')?.value;
    const formConfirmPassword = this.formGroup.get('userAccount.formConfirmPassword')?.value;

    return formPassword !== formConfirmPassword && formConfirmPassword !== '' && formPassword !== '';
  }

  validateUserAccountInputs() {
    const userAccountControl = this.formGroup.get('userAccount');

    if (userAccountControl && userAccountControl.valid) {
      return this.comparePasswords();
    }

    return true;
  }

  createAccount() {
    const username = this.formGroup.get('userAccount.formUsername')?.value;
    const password = this.formGroup.get('userAccount.formPassword')?.value;
    const projectName = this.formGroup.get('customizedQueue.projectName')?.value;
    const exchangeName = this.formGroup.get('customizedQueue.exchangeName')?.value;
    const queueName = this.formGroup.get('customizedQueue.queueName')?.value;
    const routingKey = this.formGroup.get('customizedQueue.routingKey')?.value;

    var projectInfo = {
      exchange: exchangeName,
      queue: queueName,
      routingKey: routingKey
    }

    var userAccountInfo = {
      name: projectName,
      username: username,
      password: password,
      connection: projectInfo
    }
    this.accountService.createAccount(userAccountInfo).subscribe(async () => {
      await this.router.navigate(['/messaging']);
    }, (error: HttpErrorResponse) => {
      //TODO Error status from backend
    })
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }



}
