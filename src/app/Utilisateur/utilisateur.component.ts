import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-Utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  users:  Utilisateur[];
  // selectedPolicy:  Utilisateur  = { id: null,
  //   username:  null,
  //   password:  null,
  //   nom: null,
  //   prenom: null,
  //   adresse: null,
  //   email: null,
  //   tel: null,
  //   statut: null,
  //   profil: null,
  //   dateCreation: null,
  //   image_name: null,
  //   updateAt: null,
  //   partenaire: null,
  //   compte: null,
  //   roles: null};

    ngOnInit() {
      this.apiService.listerUtilisateur().subscribe((users)=>{
        this.users = users;
        console.log(this.users);
      })
    }

}
