import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GinService } from '../../service/gin.service';
/* import { GinModel } from './models/gin.model';
 *//* 
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts'; */

@Component({
  selector: 'app-gin',
  templateUrl: './gin.component.html',
  styleUrls: ['./gin.component.scss']
})
export class GinComponent implements OnInit {

 /* public radarChartOptions: RadialChartOptions = {

/*   // Radar
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

*/
gin = {
  name: 'bla',
  "aroma": [
  "Enebro",
  "Cardamomo",
  "Canela china (cassia)",
  "Cilantro",
  "Bayas de cubeba",
  "Jengibre",
  "Lima",
  "Regaliz",
  "Nuez moscada",
  "Flor de uva"
],
"comp": [
  "Rodaja de jengibre fresco",
  "twist de limón"
],
"exerp": "Elaborada con los mismos ingredientes aromáticos que G'vine Floraisson pero en diferente proporción. Se reduce la cantidad de flores de uva y se incrementa la proporción de nuez moscaday de enebro. Se eleva en 3,9 por ciento la graduación alcohólica.",
"from": "Francia",
"grad": "43,9%",
"pentagon": [
  3,
  1,
  4,
  1,
  4
],
"perfAro": "Perfil aromático: Ginebra de corte floral y especiado, en el cual predomina la flor de uva y las notas de jengibre y nuez moscada junto con el enebro.",
"tonic": "Schweppes jengibre y cardamomo"
};

  constructor( private GinService : GinService,
                private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    /* if(id){
      this.ginName = id;
      this.GinService.getGin( id )
        .subscribe( (resp: GinModel) => {
          this.gin = resp;
          this.radarChartData = [
            { data: this.gin.pentagon}
          ];
        })
    } */
    
   
  }

}
