import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-multiple-outlets',
  templateUrl: './multiple-outlets.component.html',
  styleUrls: ['./multiple-outlets.component.scss']
})
export class MultipleOutletsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(
      params => console.log(params)
    );
  }

  ngOnInit(): void {
  }

}
