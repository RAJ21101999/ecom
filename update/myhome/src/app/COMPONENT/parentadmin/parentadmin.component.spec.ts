import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentadminComponent } from './parentadmin.component';

describe('ParentadminComponent', () => {
  let component: ParentadminComponent;
  let fixture: ComponentFixture<ParentadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
