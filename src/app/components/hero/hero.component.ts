import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  heroe:any = {}

  constructor(private activatedRoute:ActivatedRoute, private _heroeService:HeroesService) { 
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroeService.getHeroe(params['id'])
    })
  }

  
  
  ngOnInit() {
  }

}
