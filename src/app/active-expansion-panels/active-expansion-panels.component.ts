import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface MyPanel {
  title: string;
  outletName: string;
  isActive: boolean;
}

const myPanelList: MyPanel[] = [
  {
    title: 'This is A',
    outletName: 'a',
    isActive: false,
  },
  {
    title: 'This is B',
    outletName: 'b',
    isActive: false,
  },
  {
    title: 'This is C',
    outletName: 'c',
    isActive: false,
  },
  {
    title: 'This is D',
    outletName: 'd',
    isActive: false,
  },
];

@Component({
  selector: 'app-active-expansion-panels',
  templateUrl: './active-expansion-panels.component.html',
  styleUrls: ['./active-expansion-panels.component.scss'],
})
export class ActiveExpansionPanelsComponent implements OnDestroy{
  
  panels: MyPanel[] = myPanelList;

  public routeSubscription;

  constructor(_activatedRoute: ActivatedRoute) {
    this.routeSubscription = _activatedRoute.params.subscribe((params) => {
      const name = params?.['name'];
      if (name) {
        this.openPanel(name);
      }
    });
  }
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  private openPanel(name: string) {
    //close expanded panel
    const activePanel = this.panels.find(
      (element) => element.isActive === true
    );
    if (activePanel) {
      activePanel.isActive = false;
    }

    //open new panel
    const panel = this.panels.find((element) => element.outletName === name);
    if (panel) {
      panel.isActive = true;
    }
  }
}
