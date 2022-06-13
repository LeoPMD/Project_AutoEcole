import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursCodeComponent } from './cours-code.component';

describe('CoursCodeComponent', () => {
  let component: CoursCodeComponent;
  let fixture: ComponentFixture<CoursCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
