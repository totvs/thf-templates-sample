import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfPageAction } from '@totvs/thf-ui/components/thf-page';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

import { SampleThfPageDynamicSearchHiringProcessesService } from './sample-thf-page-dynamic-search-hiring-processes.service';

@Component({
  selector: 'sample-thf-page-dynamic-search-hiring-processes',
  templateUrl: './sample-thf-page-dynamic-search-hiring-processes.component.html',
  providers: [SampleThfPageDynamicSearchHiringProcessesService]
})
export class SampleThfPageDynamicSearchHiringProcessesComponent implements OnInit {

  hiringProcesses: Array<object>;
  hiringProcessesColumns: Array<ThfTableColumn>;

  private jobDescriptionOptions: Array<object> ;
  private statusOptions: Array<object>;

  public readonly actions: Array<ThfPageAction> = [
    { label: 'Hire', action: this.hireCandidate.bind(this), disabled: this.disableHireButton.bind(this) }
  ];

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', action: this.beforeRedirect.bind(this) },
      { label: 'Hiring processes' }
    ]
  };

  public readonly filters: Array<any> = [
    { property: 'hireStatus', label: 'Hire Status', options: this.statusOptions, gridColumns: 6 },
    { property: 'name', label: 'Name', gridColumns: 6 },
    { property: 'city', label: 'City', gridColumns: 6 },
    { property: 'jobDescription', label: 'Job Description', options: this.jobDescriptionOptions, gridColumns: 6 },
  ];

  constructor(
    private sampleHiringProcessesService: SampleThfPageDynamicSearchHiringProcessesService,
    private thfNotification: ThfNotificationService,
    private thfDialog: ThfDialogService,
    private router: Router) { }

  ngOnInit() {
    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.updateFilters();
  }

  onAdvancedSearch(filter) {
    filter ? this.searchItems(filter) : this.resetFilters();
  }

  onChangeDisclaimers(disclaimers) {
    const filter = {};
    disclaimers.forEach(item => {
      filter[item.property] = item.value;
    });
    this.searchItems(filter);
  }

  onQuickSearch(filter) {
    filter ? this.searchItems({ name: filter }) : this.resetFilters();
  }

  private beforeRedirect(itemBreadcrumbLabel) {
    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {
      this.thfDialog.confirm({
        title: `Confirm redirect to ${itemBreadcrumbLabel}`,
        message: `There is data selected. Are you sure you want to quit?`,
        confirm: () => this.router.navigate(['/'])
      });
    } else {
      this.router.navigate(['/']);
    }
  }

  private disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  private hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.thfNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.thfNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.thfNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  private resetFilters() {
    this.hiringProcesses = this.sampleHiringProcessesService.resetFilterHiringProcess();
  }

  private searchItems(filter) {
    this.hiringProcesses = this.sampleHiringProcessesService.filter(filter);
  }

  private updateFilters() {
    this.filters[0].options = this.statusOptions;
    this.filters[3].options = this.jobDescriptionOptions;
  }

}
