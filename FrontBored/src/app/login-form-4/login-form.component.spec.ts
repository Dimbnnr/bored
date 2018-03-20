import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForm5Component } from './login-form-5.component';

describe('LoginForm5Component', () => {
  let component: LoginForm5Component;
  let fixture: ComponentFixture<LoginForm5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginForm5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
