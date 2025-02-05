import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymDetailsComponent } from './gym-details.component';

describe('GymDetailsComponent', () => {
  let component: GymDetailsComponent;
  let fixture: ComponentFixture<GymDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
