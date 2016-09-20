import { Component } from '@angular/core';
import { DirectorService } from './director.service';

@Component ({
    selector: 'directors',
    templateUrl: 'app/directors.component.html',
    providers: [DirectorService]
})

export class DirectorsComponent {

    constructor(private _directorSerice:DirectorService ) 
    {

    }
    directors = this._directorSerice.getDirectors();
}

