import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyprojectComponent } from './add-myproject.component';

describe('AddMyprojectComponent', () => {
  let component: AddMyprojectComponent;
  let fixture: ComponentFixture<AddMyprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMyprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMyprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
