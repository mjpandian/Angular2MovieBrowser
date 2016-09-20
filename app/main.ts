import {bootstrap} from '@angular/platform-browser-dynamic';
import {StoryComponent} from './story.component';
import {DirectorsComponent} from './directors.component'

bootstrap(DirectorsComponent)
.then(success => console.log('Bootstrap Success'))
.catch(error => console.log(error));