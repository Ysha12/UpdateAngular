import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistUniComponent } from './regist-uni.component';

describe('RegistUniComponent', () => {
  let component: RegistUniComponent;
  let fixture: ComponentFixture<RegistUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
