import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCardComponent } from './p-card.component';

describe('PCardComponent', () => {
  let component: PCardComponent;
  let fixture: ComponentFixture<PCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
