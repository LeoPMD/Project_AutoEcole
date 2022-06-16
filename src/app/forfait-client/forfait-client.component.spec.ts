import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitClientComponent } from './forfait-client.component';

describe('ForfaitClientComponent', () => {
  let component: ForfaitClientComponent;
  let fixture: ComponentFixture<ForfaitClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
