import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectItemComponent } from './myproject-item.component';

describe('MyprojectItemComponent', () => {
  let component: MyprojectItemComponent;
  let fixture: ComponentFixture<MyprojectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprojectItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprojectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
