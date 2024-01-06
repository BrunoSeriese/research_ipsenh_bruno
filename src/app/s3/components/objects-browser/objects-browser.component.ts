import {Component, Input, OnInit} from '@angular/core';
import {Bucket} from "../../models/bucket.model";
import {Item} from "../../models/item.model";
import {UnitService} from "../../services/unit.service";
import {BucketService} from "../../services/bucket.service";
import {DateService} from "../../services/date.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-objects-browser',
  templateUrl: './objects-browser.component.html',
  styleUrls: ['./objects-browser.component.scss'],
  animations: [
    trigger(
      'fadeAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('100ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('100ms', style({opacity: 0}))
        ])
      ]
    )
  ],
})
export class ObjectsBrowserComponent implements OnInit {
  @Input() bucket!: Bucket;

  public directories: string[] = [];
  public items: Item[] = [];
  public fetching: boolean = false;
  public error: boolean = false;

  constructor(
    private bucketService: BucketService,
    public unitService: UnitService,
    public dateService: DateService
  ) { }

  ngOnInit(): void {
    this.loadDirectoryContents("/");
  }

  public getAbsolutePath() {
    return " / " + this.getCurrentDirectory().split("/").filter(path => path != "").join(" / ");
  }

  public getTrimmedObjectName(objectPath: string): string {
    return objectPath.split("/").filter(path => path !== "").pop() || "";
  }

  public loadDirectoryContents(objectPath: string): void {
    this.fetching = true;
    this.bucketService.getBucketObjectsDirectory(this.bucket!.name, objectPath).subscribe(items => {
      this.items = this.sortItemsByObjectNameAndType(items);
      this.fetching = false;
      this.directories.push(objectPath);
    }, () => this.handleBucketObjectsDirectoryError());
  }

  public loadPreviousDirectoryContents(): void {
    const previousDirectory: string = this.getPreviousDirectory();

    this.fetching = true;
    this.bucketService.getBucketObjectsDirectory(this.bucket.name, previousDirectory).subscribe(items => {
      this.items = this.sortItemsByObjectNameAndType(items);
      this.fetching = false;
      if (previousDirectory !== this.getCurrentDirectory()) {
        this.directories.pop();
      }
    }, () => this.handleBucketObjectsDirectoryError())
  }

  private handleBucketObjectsDirectoryError() {
    this.fetching = false;
    this.error = true;

    setTimeout(() => {
      this.error = false;
    }, 2000)
  }

  private getCurrentDirectory(): string {
    if (this.directories.length == 0) {
      return "/"
    }
    return this.directories[this.directories.length - 1];
  }

  private getPreviousDirectory(): string {
    const index = this.directories.length - 2;

    if (index < 0) {
      return "/";
    }

    return this.directories[index];
  }

  private sortItemsByObjectNameAndType(items: Item[]): Item[] {
    return items.sort((a: Item, b: Item) => {
      return this.getTrimmedObjectName(a.objectName)?.localeCompare(this.getTrimmedObjectName(b.objectName))
    }).sort((a: Item, b: Item) => {
      return (b.dir ? 1 : 0) - (a.dir ? 1 : 0);
    })
  }

}
