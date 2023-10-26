import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSystemsUfopaComponent } from './list-systems-ufopa.component';

describe('ListSystemsUfopaComponent', () => {
  let component: ListSystemsUfopaComponent;
  let fixture: ComponentFixture<ListSystemsUfopaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSystemsUfopaComponent]
    });
    fixture = TestBed.createComponent(ListSystemsUfopaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
