import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CleanCacheComponent } from './clean-cache.component';

import { SampleThfPageDynamicSearchBasicComponent } from './sample-thf-page-dynamic-search-basic/sample-thf-page-dynamic-search-basic.component';
import { SampleThfPageDynamicTableBasicComponent } from './sample-thf-page-dynamic-table-basic/sample-thf-page-dynamic-table-basic.component';
import { SampleThfPageDynamicDetailBasicComponent } from './sample-thf-page-dynamic-detail-basic/sample-thf-page-dynamic-detail-basic.component';
import { SampleThfPageDynamicEditBasicComponent } from './sample-thf-page-dynamic-edit-basic/sample-thf-page-dynamic-edit-basic.component';
import { SampleThfPageDynamicEditMasterDetailComponent } from './sample-thf-page-dynamic-edit-master-detail/sample-thf-page-dynamic-edit-master-detail.component';

import {
  ThfPageDynamicDetailComponent, ThfPageDynamicEditComponent, ThfPageDynamicTableComponent
} from '@totvs/thf-templates/components';

const routes: Routes = [
  { path: 'clean', component: CleanCacheComponent },

  { path: 'dynamic-search', component: SampleThfPageDynamicSearchBasicComponent },
  { path: 'dynamic-table', component: SampleThfPageDynamicTableBasicComponent },
  { path: 'dynamic-detail/:id', component: SampleThfPageDynamicDetailBasicComponent },
  { path: 'dynamic-edit/:id', component: SampleThfPageDynamicEditBasicComponent },
  { path: 'dynamic-edit-md/:id', component: SampleThfPageDynamicEditMasterDetailComponent },
  { path: 'dynamic-new', component: SampleThfPageDynamicEditBasicComponent },


  { path: 'metadata/detail/:id', component: ThfPageDynamicDetailComponent, data: {
      serviceApi: 'https://thf.totvs.com.br/sample/api/thf-metadata/v1/people' }
  },
  { path: 'metadata/edit/:id', component: ThfPageDynamicEditComponent, data: {
    serviceApi: 'https://thf.totvs.com.br/sample/api/thf-metadata/v1/people' }
  },

  { path: 'metadata/new', component: ThfPageDynamicEditComponent, data: {
    serviceApi: 'https://thf.totvs.com.br/sample/api/thf-metadata/v1/people' }
  },

  { path: 'metadata', component: ThfPageDynamicTableComponent, data: {
    serviceApi: 'https://thf.totvs.com.br/sample/api/thf-metadata/v1/people' }
  },

  { path: '', redirectTo: 'dynamic-search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
