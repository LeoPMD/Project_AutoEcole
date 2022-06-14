import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSeanceComponent } from './formulaire-seance.component';

describe('FormulaireSeanceComponent', () => {
  let component: FormulaireSeanceComponent;
  let fixture: ComponentFixture<FormulaireSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireSeanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
