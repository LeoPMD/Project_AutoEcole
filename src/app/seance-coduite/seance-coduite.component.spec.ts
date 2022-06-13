import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceCoduiteComponent } from './seance-coduite.component';

describe('SeanceCoduiteComponent', () => {
  let component: SeanceCoduiteComponent;
  let fixture: ComponentFixture<SeanceCoduiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeanceCoduiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceCoduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
