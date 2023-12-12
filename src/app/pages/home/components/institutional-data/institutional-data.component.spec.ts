import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionalDataComponent } from './institutional-data.component';

describe('InstitutionalDataComponent', () => {
  let component: InstitutionalDataComponent;
  let fixture: ComponentFixture<InstitutionalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutionalDataComponent]
    });
    fixture = TestBed.createComponent(InstitutionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
