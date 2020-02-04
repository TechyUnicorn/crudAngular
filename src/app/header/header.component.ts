import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  @Output() selectedTab = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  onHeaderSelect(feature: string) {
    this.selectedTab.emit(feature);
  }
}
