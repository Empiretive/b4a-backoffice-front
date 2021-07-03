import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlusComponent } from './add-plus.component';

describe('AddPlusComponent', () => {
  let component: AddPlusComponent;
  let fixture: ComponentFixture<AddPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
