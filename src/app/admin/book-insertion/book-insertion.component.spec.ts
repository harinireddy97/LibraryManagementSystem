import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInsertionComponent } from './book-insertion.component';

describe('BookInsertionComponent', () => {
  let component: BookInsertionComponent;
  let fixture: ComponentFixture<BookInsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookInsertionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
