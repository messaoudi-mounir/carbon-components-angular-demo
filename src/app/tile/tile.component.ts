import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { ExpandableTile } from "carbon-components-angular";

@Component({
  selector: "app-tile",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.scss"]
})
export class TileComponent implements OnInit {
  @ViewChildren(ExpandableTile) tiles: QueryList<ExpandableTile>;

  constructor() {}

  ngOnInit() {}

  adjustTilesHeight() {
    setTimeout(
      () => this.tiles.toArray().forEach(item => item.updateMaxHeight()),
      0
    );
  }

  onClick(e) {
    e.preventDefault();
  }
}
