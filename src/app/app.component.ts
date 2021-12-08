import { Component, OnInit } from "@angular/core";
import { ReplaySubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  replaySubject$: ReplaySubject<number>;
  ngOnInit(): void {
    this.replaySubject$ = new ReplaySubject(2);
    this.replaySubject$.subscribe((data) => console.log("observerA = ", data));
    this.replaySubject$.subscribe((data) => console.log("observerB = ", data));
    this.replaySubject$.next(1);
    this.replaySubject$.next(2);
    this.replaySubject$.next(3);
    this.replaySubject$.subscribe((data) => console.log("observerC = ", data));
    this.replaySubject$.next(4);
    this.replaySubject$.next(5);
  }
}
