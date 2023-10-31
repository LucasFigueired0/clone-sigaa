import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOptionsComponent } from './register-options.component';

describe('RegisterOptionsComponent', () => {
  let component: RegisterOptionsComponent;
  let fixture: ComponentFixture<RegisterOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterOptionsComponent]
    });
    fixture = TestBed.createComponent(RegisterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
