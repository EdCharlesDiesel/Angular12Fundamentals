import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBoundComponent } from './data-bound.component';

describe('DataBoundComponent', () => {
  let component: DataBoundComponent;
  let fixture: ComponentFixture<DataBoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
