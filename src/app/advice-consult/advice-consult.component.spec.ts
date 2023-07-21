import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceConsultComponent } from './advice-consult.component';

describe('AdviceConsultComponent', () => {
  let component: AdviceConsultComponent;
  let fixture: ComponentFixture<AdviceConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceConsultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
