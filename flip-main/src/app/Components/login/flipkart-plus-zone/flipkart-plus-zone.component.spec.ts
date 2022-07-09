import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartPlusZoneComponent } from './flipkart-plus-zone.component';

describe('FlipkartPlusZoneComponent', () => {
  let component: FlipkartPlusZoneComponent;
  let fixture: ComponentFixture<FlipkartPlusZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartPlusZoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipkartPlusZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
