import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  
  items;
  constructor(private uts: UtilitiesService) {
   }

  ngOnInit(): void {
    this.items = this.uts.getItems();
  }




}
