import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Partenaire } from '../Partenaire';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.scss']
})
export class PartenaireComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  partenaire: Partenaire[];

  ngOnInit() {
    this.apiService.listerPartenaire().subscribe((partenaire)=>{
      this.partenaire = partenaire;
      console.log(this.partenaire);
    })
  }

}
