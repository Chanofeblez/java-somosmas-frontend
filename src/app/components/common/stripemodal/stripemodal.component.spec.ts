import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripemodalComponent } from './stripemodal.component';

describe('StripemodalComponent', () => {
  let component: StripemodalComponent;
  let fixture: ComponentFixture<StripemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripemodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StripemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
