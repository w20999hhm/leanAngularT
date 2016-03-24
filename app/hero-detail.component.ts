/**
 * Created by WK on 2016/3/23.
 */
import  {Component,OnInit} from 'angular2/core';
import {Hero} from './hero';
import {RouteParams} from 'angular2/router';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    styleUrls: ['app/css/hero-detail.component.css'],
    templateUrl: 'app/tpl/hero-detail.component.html',
    inputs: ['hero']
})

export class HeroDetailComponent implements OnInit {
    hero:Hero;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(hero=>this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}