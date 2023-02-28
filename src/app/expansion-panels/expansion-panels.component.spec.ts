import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelsComponent } from './expansion-panels.component';

describe('ExpansionPanelsComponent', () => {
  let component: ExpansionPanelsComponent;
  let fixture: ComponentFixture<ExpansionPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
