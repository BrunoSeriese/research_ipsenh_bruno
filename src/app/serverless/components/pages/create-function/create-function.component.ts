import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorCode } from 'src/app/serverless/data/function.data';
import { FunctionService } from 'src/app/serverless/services/function.service';

@Component({
  selector: 'app-create-function',
  templateUrl: './create-function.component.html',
  styleUrls: ['./create-function.component.scss']
})
export class CreateFunctionComponent implements OnInit{
  form!: UntypedFormGroup;
  files: File[] = [];
  hasError: boolean = false;
  error!: ErrorCode;

  constructor(private service: FunctionService, private router: Router) { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      projectId: new UntypedFormControl(''),
      name: new UntypedFormControl('', Validators.required),
      language: new UntypedFormControl('python'),
      handler: new UntypedFormControl(null, Validators.required),
      requirements: new UntypedFormControl(null, Validators.required)
    });
  }

  handleSubmit(): void {
    let formData = new FormData();
    formData.append('projectId', '8d208b59-7ccb-437e-a796-50f21c9e38c3');
    formData.append('name', this.form.get('name')?.value);
    formData.append('language', 'PYTHON');
    for (let key in this.files) {
      formData.append('files', this.files[key]);
    }

    this.service.create(formData).subscribe({
      next: (res) => {
        console.log(res.functionId)
        this.router.navigate(['dashboard/serverless/', res.functionId])
      },
      error: (err) => { this.hasError = true; this.error = this.error = err.error }
    });
  }

  onFileChange(event: any, field: any) {
    this.files[field] = event.target.files[0];
  }
}
