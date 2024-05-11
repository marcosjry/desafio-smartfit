import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendBarComponent } from './legend-bar.component';

describe('LegendBarComponent', () => {
  let component: LegendBarComponent;
  let fixture: ComponentFixture<LegendBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegendBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegendBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
