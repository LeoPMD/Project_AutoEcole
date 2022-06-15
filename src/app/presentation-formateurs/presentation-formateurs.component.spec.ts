import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationFormateursComponent } from './presentation-formateurs.component';

describe('PresentationFormateursComponent', () => {
  let component: PresentationFormateursComponent;
  let fixture: ComponentFixture<PresentationFormateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationFormateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationFormateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
