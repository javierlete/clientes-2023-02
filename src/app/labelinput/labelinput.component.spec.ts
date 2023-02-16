import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelinputComponent } from './labelinput.component';

describe('LabelinputComponent', () => {
  let component: LabelinputComponent;
  let fixture: ComponentFixture<LabelinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
