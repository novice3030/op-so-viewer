import { StackoverflowApiService } from "./services/stackoverflow-api.service";
import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  OnDestroy
} from "@angular/core";
import { Observable, fromEvent, Subscription } from "rxjs";
import { debounceTime, mergeMap, tap } from "rxjs/operators";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = "op-so-viewer";
  selectedResult: any;
  searchInputCtrl: FormControl = new FormControl();
  apiResult: any;
  sub: Subscription;

  constructor(private stackoverflowApiService: StackoverflowApiService) {}

  ngAfterViewInit() {
    this.sub = this.searchInputCtrl.valueChanges
      .pipe(
        debounceTime(300),
        mergeMap(() =>
          this.stackoverflowApiService.queryTags(this.searchInputCtrl.value)
        )
      )
      .subscribe(result => {
        this.apiResult = result;
        this.selectedResult = null;
      });
  }

  onItemClicked(item: any) {
    this.selectedResult = item;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
