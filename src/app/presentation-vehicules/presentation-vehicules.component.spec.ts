import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationVehiculesComponent } from './presentation-vehicules.component';

describe('PresentationVehiculesComponent', () => {
  let component: PresentationVehiculesComponent;
  let fixture: ComponentFixture<PresentationVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationVehiculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
