import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tajeta',
  templateUrl: './heroe-tajeta.component.html'
})
export class HeroeTajetaComponent implements OnInit {

  @Input() heroe:any= {}
  constructor(private router:Router) {
    
   }

  ngOnInit() {
    
  }

  verHero(){
    this.router.navigate(['/heroe',this.heroe.idx]);
  }

}
