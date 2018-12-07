import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'StoriesPage';
  tab2Root = 'DiscoverPage';
  tab3Root = 'MessagesPage';
  tab4Root = 'BrowsePage';

  constructor() {}
}
