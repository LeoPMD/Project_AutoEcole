import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireModifierFormateurComponent } from './formulaire-modifier-formateur.component';

describe('FormulaireModifierFormateurComponent', () => {
  let component: FormulaireModifierFormateurComponent;
  let fixture: ComponentFixture<FormulaireModifierFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireModifierFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireModifierFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
