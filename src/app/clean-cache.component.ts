import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clean-cache',
  templateUrl: './clean-cache.component.html'
})
export class CleanCacheComponent implements OnInit {

  ngOnInit() {
    localStorage.clear();
  }

}
