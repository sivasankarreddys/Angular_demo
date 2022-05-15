import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginvalidateComponent } from './loginvalidate.component';

describe('LoginvalidateComponent', () => {
  let component: LoginvalidateComponent;
  let fixture: ComponentFixture<LoginvalidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginvalidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
