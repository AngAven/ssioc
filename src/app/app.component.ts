import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssioc';

  constructor(
    private modalService: NgbModal
  ) {
  }

  public open(modal: any): void {
    this.modalService.open(modal)
  }
}
