import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleOutletsComponent } from './multiple-outlets.component';

describe('MultipleOutletsComponent', () => {
  let component: MultipleOutletsComponent;
  let fixture: ComponentFixture<MultipleOutletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleOutletsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleOutletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
