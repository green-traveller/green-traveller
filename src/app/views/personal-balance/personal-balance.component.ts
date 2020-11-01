import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Alert } from 'src/app/models/alert';
import { DataService } from 'src/app/services/data.service';
import { RouteService } from 'src/app/services/route.service';

@Component({
  selector: 'app-personal-balance',
  templateUrl: './personal-balance.component.html',
  styleUrls: ['./personal-balance.component.css']
})
export class PersonalBalanceComponent implements OnInit {  
  
  currentCo2Sum = this.dataService.getTotalCo2Last30Days(this.routeService); 

  // Personal Goal  

  personalGoal: number = this.dataService.getCo2PersonalChallenge().value;

  personalGoalBarStatus: number = (this.currentCo2Sum / this.personalGoal);

  personalGoalAlert: Alert = {
    type: this.getPersonalGoalAlertType(),
    message: this.getPersonalGoalAlertMessage()
  };
  
  showPersonalChallengeAlert = true;

  constructor(private dataService: DataService, private routeService: RouteService) { }

  ngOnInit(): void {
  }

  getPersonalGoalAlertType(): string {
    if (this.personalGoalBarStatus < 1) {
      return 'success'
    } else if (this.personalGoalBarStatus === 1) {
      return 'warning'
    }
    else {
      return 'danger'
    }
  }  

  getPersonalGoalAlertMessage(): string {
    if (this.personalGoalBarStatus < 1) {
      return `Great! Over the last 30 days you have mastered your personal challenge and even kept your CO₂ emissions 
      from transport ${formatNumber((1 - this.personalGoalBarStatus)*100, 'en_US', '1.1-1')} % lower!`
    } 
    else if (this.personalGoalBarStatus  === 1) {
      return `Great! Over the last 30 days you have mastered your personal challenge and emitted exactly ${formatNumber(this.currentCo2Sum, 'en_US', '1.0-0')} 
      kg of CO₂ from transport. Can you do even better?`
    }
    else {
      return `Oh no, you failed your personal challenge! Over the last 30 days you have emitted ${formatNumber((this.personalGoalBarStatus - 1)*100, 'en_US', '1.1-1')} % more CO₂ 
      from transport than you planned to!`
    }
  }

}
