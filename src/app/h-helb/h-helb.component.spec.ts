import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HHelbComponent } from './h-helb.component';

describe('HHelbComponent', () => {
  let component: HHelbComponent;
  let fixture: ComponentFixture<HHelbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HHelbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HHelbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
