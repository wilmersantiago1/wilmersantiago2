import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {
  contactusForm = this.fb.group({
    person: this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    }),
    email: ['', Validators.required],
    phone: [''],
    gender: ['']
  });

  constructor(private fb: FormBuilder) { }

  updateValues(){
    this.contactusForm.patchValue({
      person: {
        firstname: "James",
        lastname: "Huiza"
      },
      email: "james.huiza@dominio.com.pe",
      phone: "94999999",
      gender: "M"
    });
  }

  cleanValues(){
    this.contactusForm.reset();
  }

  onSubmit(){
    document.onsubmit;
    console.log(this.contactusForm.value);
  }

  ngOnInit(): void {   }
}