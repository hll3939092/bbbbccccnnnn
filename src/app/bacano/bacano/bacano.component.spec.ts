import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacanoComponent } from './bacano.component';

describe('BacanoComponent', () => {
  let component: BacanoComponent;
  let fixture: ComponentFixture<BacanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
