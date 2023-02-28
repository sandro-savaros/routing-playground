import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveExpansionPanelsComponent } from './active-expansion-panels.component';

describe('ActiveExpansionPanelsComponent', () => {
  let component: ActiveExpansionPanelsComponent;
  let fixture: ComponentFixture<ActiveExpansionPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveExpansionPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveExpansionPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
