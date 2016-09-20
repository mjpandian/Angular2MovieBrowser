import {Component} from '@angular/core';

@Component({
  selector: 'my-story',
  templateUrl: 'app/story.component.html',
  directives:  []
})
export class StoryComponent {
  story = { id: 100, name: 'The force'};
  color= 'blue';
 }