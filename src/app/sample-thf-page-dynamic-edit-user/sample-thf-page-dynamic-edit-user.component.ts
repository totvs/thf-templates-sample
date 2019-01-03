import { Component } from '@angular/core';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfDynamicFormField } from '@totvs/thf-ui/components/thf-dynamic';
import { ThfPageDynamicEditActions } from '@totvs/thf-templates/components/thf-page-dynamic-edit';

@Component({
  selector: 'sample-thf-page-dynamic-edit-user',
  templateUrl: './sample-thf-page-dynamic-edit-user.component.html'
})
export class SampleThfPageDynamicEditUserComponent {

  public readonly serviceApi = 'https://thf.totvs.com.br/sample/api/thf-metadata/v1/people';

  public readonly actions: ThfPageDynamicEditActions = {
    save: 'dynamic-detail/:id',
    saveNew: 'dynamic-new'
  };

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'People', link: '/dynamic-table' },
      { label: 'Edit' }
    ]
  };

  public readonly fields: Array<ThfDynamicFormField> = [
    { property: 'status', divider: 'Status', options: ['active', 'inactive'] },
    { property: 'id', label: 'User ID', key: true, required: true },
    { property: 'name', divider: 'Personal data', required: true },
    { property: 'nickname' },
    { property: 'email', label: 'E-mail' },
    { property: 'birthdate', label: 'Birth date', type: 'date' },
    { property: 'genre', options: ['female', 'male', 'others'], gridLgColumns: 6 },
    { property: 'nationality' },
    { property: 'birthPlace', label: 'Place of birth' },
    { property: 'graduation' },
    { property: 'father', label: 'Father`s name', divider: 'Relationship' },
    { property: 'mother', label: 'Mother`s name' },
    { property: 'street', divider: 'Address' },
    { property: 'city' },
    { property: 'country' },
  ];

}
