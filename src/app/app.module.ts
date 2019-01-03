import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';
import { ThfTemplatesModule } from '@totvs/thf-templates';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CleanCacheComponent } from './clean-cache.component';

import { SampleThfPageDynamicSearchBasicComponent } from './sample-thf-page-dynamic-search-basic/sample-thf-page-dynamic-search-basic.component';
import { SampleThfPageDynamicTableBasicComponent } from './sample-thf-page-dynamic-table-basic/sample-thf-page-dynamic-table-basic.component';
import { SampleThfPageDynamicDetailBasicComponent } from './sample-thf-page-dynamic-detail-basic/sample-thf-page-dynamic-detail-basic.component';
import { SampleThfPageDynamicEditBasicComponent } from './sample-thf-page-dynamic-edit-basic/sample-thf-page-dynamic-edit-basic.component';
import { SampleThfPageDynamicEditMasterDetailComponent } from './sample-thf-page-dynamic-edit-master-detail/sample-thf-page-dynamic-edit-master-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CleanCacheComponent,

    SampleThfPageDynamicSearchBasicComponent,
    SampleThfPageDynamicTableBasicComponent,
    SampleThfPageDynamicDetailBasicComponent,
    SampleThfPageDynamicEditBasicComponent,
    SampleThfPageDynamicEditMasterDetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,

    AppRoutingModule,

    ThfModule,
    ThfTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
