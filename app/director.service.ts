import {Injectable} from '@angular/core';

@Injectable()
export class DirectorService {
    getDirectors = () =>
     [
        { id:1, name: 'Bharathiraja'},
        { id:2, name: 'ManiRatnam'}
    ];
}