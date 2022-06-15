import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursCodeService } from '../service/cours-code.service';

@Component({
  selector: 'app-update-cour',
  templateUrl: './update-cour.component.html',
  styleUrls: ['./update-cour.component.css']
})
export class UpdateCourComponent implements OnInit {

  coursForm?: FormGroup
  id!:number
  form: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private coursCodeService: CoursCodeService, private activatedRoute: ActivatedRoute) {
  this.id= activatedRoute.snapshot.params['id']
}
  ngOnInit(): void {
    this.coursCodeService.getCoursById(this.id).subscribe(coursCode => {
      this.coursForm = this.formBuilder.group({
        id:[coursCode.id, [Validators.required]],
        titre:[coursCode.titre, [Validators.minLength(3), Validators.maxLength(50)]]
      },
      {
        updateOn: "blur"
      }
      )
    })
  }


  onUpdate(){
    this.coursCodeService.updateCour(this.coursForm?.value).subscribe()
    this.router.navigate(["CoursCode"])
  }

  set isDisabled(value: boolean) {
    this.isDisabled = value;
    if(value) {
     this.form.controls['name'].disable();
    } else {
       this.form.controls['name'].enable();
     }
   }
}
