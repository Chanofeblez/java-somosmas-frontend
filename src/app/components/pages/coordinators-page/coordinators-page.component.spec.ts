import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorsPageComponent } from './coordinators-page.component';

describe('CoordinatorsPageComponent', () => {
  let component: CoordinatorsPageComponent;
  let fixture: ComponentFixture<CoordinatorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinatorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
