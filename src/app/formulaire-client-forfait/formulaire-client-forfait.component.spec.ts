import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCLientForfaitComponent } from './formulaire-client-forfait.component';

describe('FormulaireCLientForfaitComponent', () => {
  let component: FormulaireCLientForfaitComponent;
  let fixture: ComponentFixture<FormulaireCLientForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCLientForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireCLientForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
