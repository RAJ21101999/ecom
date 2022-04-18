import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducctadminComponent } from './producctadmin.component';

describe('ProducctadminComponent', () => {
  let component: ProducctadminComponent;
  let fixture: ComponentFixture<ProducctadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducctadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducctadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
