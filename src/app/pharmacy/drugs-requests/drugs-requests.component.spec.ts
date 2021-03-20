import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsRequestsComponent } from './drugs-requests.component';

describe('DrugsRequestsComponent', () => {
  let component: DrugsRequestsComponent;
  let fixture: ComponentFixture<DrugsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
