import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Go2backComponent } from './go2back.component';

describe('Go2backComponent', () => {
  let component: Go2backComponent;
  let fixture: ComponentFixture<Go2backComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Go2backComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Go2backComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
