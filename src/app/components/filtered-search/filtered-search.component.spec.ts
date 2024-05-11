import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredSearchComponent } from './filtered-search.component';

describe('FilteredSearchComponent', () => {
  let component: FilteredSearchComponent;
  let fixture: ComponentFixture<FilteredSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteredSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
