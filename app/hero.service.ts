/**
 * Created by WK on 2016/3/24.
 */
import  {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(
                resolve=>setTimeout(()=>resolve(HEROES), 2000)
        )
    }
}