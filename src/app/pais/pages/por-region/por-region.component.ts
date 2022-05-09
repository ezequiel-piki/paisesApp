import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string [] = [ "EU", 
  "EFTA", 
  "CARICOM", 
  "PA", 
  "AU", 
  "USAN", 
  "EEU", 
  "AL", 
  "ASEAN", 
  "CAIS",
  "CEFTA", 
  "NAFTA ",
  "SAARC" ,]
  regionActiva:string = ''
  paises : Country[] = [];
  
  
  
  
  constructor(private paisService:PaisService ) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    if(region===this.regionActiva){return}
   
    this.regionActiva = region;
    this.paises = [];
   
   this.paisService.buscarRegion(region).subscribe((paises)=>{
     this.paises=paises;
   });
  
  }

  getClaseCSS(region:string):string{
   return (region===this.regionActiva)
   ?'btn btn-primary mx-1 my-1'
   :'btn btn-outline-primary mx-1 my-1';
  }
  

}
