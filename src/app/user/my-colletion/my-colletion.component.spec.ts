import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyColletionComponent } from './my-colletion.component';

describe('MyColletionComponent', () => {
  let component: MyColletionComponent;
  let fixture: ComponentFixture<MyColletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyColletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyColletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
