import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface MyPanel {
  title: string;
  outletName: string;
  isActive: boolean
}

@Component({
  selector: 'app-active-expansion-panels',
  templateUrl: './active-expansion-panels.component.html',
  styleUrls: ['./active-expansion-panels.component.scss']
})
export class ActiveExpansionPanelsComponent {

  routes: string[] = ['a', 'b', 'c'];

  panels: MyPanel[] = [
    {
      title: 'This is A',
      outletName: 'a',
      isActive: false
    },
    {
      title: 'This is B',
      outletName: 'b',
      isActive: false
    },
    {
      title: 'This is C',
      outletName: 'c',
      isActive: false
    },
    {
      title: 'This is D',
      outletName: 'd',
      isActive: false
    }
  ];

  constructor(private _activatedRoute: ActivatedRoute) {
    
		_activatedRoute.params.subscribe(params => {
      const name = params?.['name']
      if(name){
        console.log('we have name ', name)
        this.openPanel(name);      }
		});
  }

  private openPanel(name: string) {
    const activePanel = this.panels.find(element => element.isActive === true);
    if(activePanel) {
      activePanel.isActive = false;
    }

    const panel = this.panels.find(element => element.outletName === name);
    if(panel){
      panel.isActive = true;
    }
  }
}
