import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IllustComponent } from './illust.component';

describe('IllustComponent', () => {
  let component: IllustComponent;
  let fixture: ComponentFixture<IllustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IllustComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IllustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
