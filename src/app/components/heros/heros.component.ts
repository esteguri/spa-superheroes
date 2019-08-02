import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styles: []
})
export class HerosComponent implements OnInit {

  heroes:any[] = [];

  constructor(private _heroesService:HeroesService, private router:Router) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }


}
