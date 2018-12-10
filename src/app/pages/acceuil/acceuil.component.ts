import { Component, OnInit } from '@angular/core';
import { AccueilService } from '../.././services/accueil.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(private accueilService:AccueilService) { }

  ngOnInit() {
    this.getAllAdvert()
  }

  getAllAdvert(){
    return this.accueilService.getAdvert().subscribe(
      res => {
        console.log(res)
        err => console.log(err)
    }
    );
  }
}
