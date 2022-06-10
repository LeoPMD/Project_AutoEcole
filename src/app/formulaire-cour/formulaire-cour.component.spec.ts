import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCourComponent } from './formulaire-cour.component';

describe('FormulaireCourComponent', () => {
  let component: FormulaireCourComponent;
  let fixture: ComponentFixture<FormulaireCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
