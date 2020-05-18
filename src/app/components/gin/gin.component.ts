import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GinService } from '../../service/gin.service';
import { GinModel } from './models/gin.model';

import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-gin',
  templateUrl: './gin.component.html',
  styleUrls: ['./gin.component.scss']
})
export class GinComponent implements OnInit {

  gin : GinModel = new GinModel();

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false
    }
  };
  public radarChartLabels: Label[] = ['Enebro', 'Citrico', 'Especial', 'Herbal', 'Floral'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56]}
  ];
  public radarChartType: ChartType = 'radar';



  constructor( private GinService : GinService,
                private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.GinService.getGin( id )
      .subscribe( (resp: GinModel) => {
        this.gin = resp;
      })

  }

}
