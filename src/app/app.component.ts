import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword: string = 'test';

  doSearch($event: KeyboardEvent, keyword: string) {
    if($event.keyCode == 13) {
      this.keyword = keyword;
    }
  }
}
