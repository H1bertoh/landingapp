import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;

  constructor() {
    this.newsletterForm = new FormGroup({
      nome:new FormControl('', [Validators.required]),
      email:new FormControl('', [Validators.required, Validators.email])
    });
  }
  onSubmit(){
    console.log(this.newsletterForm.value)

  }

}
