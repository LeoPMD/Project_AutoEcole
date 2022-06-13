import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierForfaitComponent } from './modifier-forfait.component';

describe('ModifierForfaitComponent', () => {
  let component: ModifierForfaitComponent;
  let fixture: ComponentFixture<ModifierForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
