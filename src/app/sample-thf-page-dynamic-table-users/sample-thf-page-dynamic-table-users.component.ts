import { Component } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfPageDynamicTableActions } from '@totvs/thf-templates/components/thf-page-dynamic-table';

@Component({
  selector: 'sample-thf-page-dynamic-table-users',
  templateUrl: './sample-thf-page-dynamic-table-users.component.html'
})
export class SampleThfPageDynamicTableUsersComponent {

  public readonly serviceApi = 'https://thf.totvs.com.br/sample/api/thf-metadata/v1/people';

  public readonly actions: ThfPageDynamicTableActions = {
    detail: 'dynamic-detail/:id',
    duplicate: 'dynamic-new',
    edit: 'dynamic-edit/:id',
    new: 'dynamic-new',
    remove: true,
    removeAll: true
  };

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People' }
    ]
  };

  public readonly cityOptions: Array<object> = [
    { value: 'São Paulo', label: 'São Paulo' },
    { value: 'Joinville', label: 'Joinville' },
    { value: 'São Bento', label: 'São Bento'},
    { value: 'Araquari', label: 'Araquari'},
    { value: 'Campinas', label: 'Campinas'},
    { value: 'Osasco', label: 'Osasco'}
  ];

  public readonly fields: Array<any> = [
    { property: 'id', key: true },
    { property: 'name', label: 'Name', filter: true, gridColumns: 6 },
    { property: 'genre', label: 'Genre', filter: true, gridColumns: 6, duplicate: true },
    { property: 'birthdate', label: 'Birthdate', type: 'date', gridColumns: 6 },
    { property: 'city', label: 'City', filter: true, duplicate: true, options: this.cityOptions, gridColumns: 12 }
  ];

}
