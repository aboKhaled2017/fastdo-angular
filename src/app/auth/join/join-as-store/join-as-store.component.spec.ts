import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAsStoreComponent } from './join-as-store.component';

describe('JoinAsStoreComponent', () => {
  let component: JoinAsStoreComponent;
  let fixture: ComponentFixture<JoinAsStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinAsStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
