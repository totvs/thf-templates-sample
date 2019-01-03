import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menus = [
    { label: 'Dynamic Search', link: 'dynamic-search' },
    { label: 'Dynamic Table', link: 'dynamic-table' },
    { label: 'Dynamic New', link: 'dynamic-new' },
    { label: 'Dynamic Detail', link: 'dynamic-detail/1' },
    { label: 'Dynamic Edit', link: 'dynamic-edit/1' },
    { label: 'Dynamic Edit - MD', link: 'dynamic-edit-md/1' },

    { label: 'Metadata Table', link: 'metadata' },
    { label: 'Metadata New', link: 'metadata/new' },
    { label: 'Metadata Detail', link: 'metadata/detail/1' },
    { label: 'Metadata Edit', link: 'metadata/edit/1' },

    { label: 'Clean Cache', link: 'clean' }
  ];

}
