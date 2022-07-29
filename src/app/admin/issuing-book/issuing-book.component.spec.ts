import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuingBookComponent } from './issuing-book.component';

describe('IssuingBookComponent', () => {
  let component: IssuingBookComponent;
  let fixture: ComponentFixture<IssuingBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuingBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
