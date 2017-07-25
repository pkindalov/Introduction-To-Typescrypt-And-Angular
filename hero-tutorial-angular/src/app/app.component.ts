import { Component } from '@angular/core';
import { Hero } from './hero'
import { HeroService } from './hero.service'

// export class Hero{
//   id: number;
//   name: string;
// }


// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];



@Component({
  selector: 'app-root',
  providers: [HeroService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private heroService: HeroService){
  this.heroes = this.heroService.getHeroes();
}

  title = 'Tour of heroes';
  // hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  // heroes = HEROES;


  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }

  
}
