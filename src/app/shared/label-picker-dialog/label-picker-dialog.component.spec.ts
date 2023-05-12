import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPickerDialogComponent } from './label-picker-dialog.component';

describe('LabelPickerDialogComponent', () => {
  let component: LabelPickerDialogComponent;
  let fixture: ComponentFixture<LabelPickerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelPickerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelPickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
