import { Component, OnInit } from '@angular/core';
import { UsageService } from '../../services/usage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public usageService: UsageService) { }
	getOptions(){
		return {
			theme: "light2",
			animationEnabled: true,
			zoomEnabled: true,
			axisY: {
				labelFormatter: (e: any) => {
					var suffixes = ["", "K", "M", "B", "T"];
	 
					var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
					if(order > suffixes.length - 1)
						order = suffixes.length - 1;
	 
					var suffix = suffixes[order];
					return "€" + (e.value / Math.pow(1000, order)) + suffix;
				}
			},
			data: [{
				type: "line",
				xValueFormatString: "DD-MM-YYYY",
				yValueFormatString: "€#,###.##",
				dataPoints: this.usageService.transformedData
			}]
		}
	}
		

  ngOnInit(): void {
	this.usageService.getUsages()
  }

}
