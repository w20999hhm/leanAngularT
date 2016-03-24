import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/tpl/heros.component.html',
    styleUrls: ['app/css/heros.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    heroes:Hero[];
    selectedHero:Hero;

    constructor(private _heroService:HeroService, private _router:Router) {
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        //this.heroes = this._heroService.getHeroes();
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}])
    }
}
