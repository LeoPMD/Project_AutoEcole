import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursCodeService } from '../service/cours-code.service';

@Component({
  selector: 'app-formulaire-cour',
  templateUrl: './formulaire-cour.component.html',
  styleUrls: ['./formulaire-cour.component.css']
})
export class FormulaireCourComponent implements OnInit {

  coursForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private coursCodeService: CoursCodeService) { }

  ngOnInit(): void {
    this.coursForm=this.formBuilder.group({
      titre:[null, [Validators.required]],
  
    })
  }

  onSave()
  {
    this.coursCodeService.ajoutCour(this.coursForm.value).subscribe()
    this.router.navigate(["CoursCode"])
  }


}
