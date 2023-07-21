import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhelbComponent } from './zhelb.component';

describe('ZhelbComponent', () => {
  let component: ZhelbComponent;
  let fixture: ComponentFixture<ZhelbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZhelbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZhelbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
