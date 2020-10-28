import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Location } from '@angular/common';
import { MapsSdkService } from './services/maps-sdk.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '🚴🌳 Green Traveller';

  constructor(
    private dataService: DataService,
    private location: Location,
    private router: Router,
    private mapsSdkService: MapsSdkService) {
  }

  ngOnInit(): void {
    this.checkLandingPage();
  }

  checkLandingPage(): void {
    const finished = this.dataService.getSetupCompleted();
    if (!finished) {
      this.navigate('/setup/name');
    }
  }

  navigate(s: string): void {
    if (s === '/') {
      this.router.navigateByUrl(s);
      this.location.replaceState(s);
    } else {
      this.router.navigateByUrl(s);
    }
  }
}
