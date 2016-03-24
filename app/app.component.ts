/**
 * Created by WK on 2016/3/24.
 */
import { Component }       from 'angular2/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS } from 'angular2/router';

@Component({
    selector: 'my-app',
    styleUrls: ['app/css/app.component.css'],
    templateUrl:'app/tpl/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService,
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }, {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    }, {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent,
    }
])

export class AppComponent {
    title = 'Tour of Heroes';
}
