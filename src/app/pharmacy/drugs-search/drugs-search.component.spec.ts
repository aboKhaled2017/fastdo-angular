import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsSearchComponent } from './drugs-search.component';

describe('DrugsSearchComponent', () => {
  let component: DrugsSearchComponent;
  let fixture: ComponentFixture<DrugsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
