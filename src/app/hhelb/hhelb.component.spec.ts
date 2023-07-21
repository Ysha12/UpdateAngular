import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HhelbComponent } from './hhelb.component';

describe('HhelbComponent', () => {
  let component: HhelbComponent;
  let fixture: ComponentFixture<HhelbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HhelbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HhelbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
