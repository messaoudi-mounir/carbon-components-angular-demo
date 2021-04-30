import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import {
  Table,
  TableModel,
  TableItem,
  TableHeaderItem
} from "carbon-components-angular";
import { UserService } from "../shared/services";
import { User } from "../shared/models";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  usersModel = new TableModel();
  isLoading: boolean;
  @ViewChild("commentCellTmpl", { static: true })
  protected commentCell: TemplateRef<any>;

  jsSkillsModel = new TableModel();
  @ViewChild("collapsedRowTmpl", { static: true })
  protected collapsedRowTmpl: TemplateRef<any>;

  jsSkillsModel1 = new TableModel();
  @ViewChild("actionCellTmpl", { static: true })
  protected actionCell: TemplateRef<any>;
  clickedRow: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.isLoading = true;
    this.usersModel.header = [
      new TableHeaderItem({ data: "Name" }),
      new TableHeaderItem({ data: "Email", className: "aa bb" }),
      new TableHeaderItem({ data: "Address" }),
      new TableHeaderItem({ data: "Comment" })
    ];

    this.userService
      .getNames()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        res => {
          this.renderTable(res);
        },
        err => {
          console.log("HTTP Error", err);
        }
      );

    //
    this.jsSkillsModel.header = [
      new TableHeaderItem({ data: "Name" }),
      new TableHeaderItem({ data: "Description" })
    ];
    this.jsSkillsModel.data = [
      [
        new TableItem({
          data: "jQuery"
        }),
        new TableItem({ data: "The Write Less, Do More, JavaScript Library." })
      ],
      [
        new TableItem({ data: "Prototype" }),
        new TableItem({
          data:
            "Prototype is a JavaScript framework that aims to ease development of dynamic web applications."
        })
      ],
      [
        new TableItem({
          data: "Underscore",
          expandedData: { homepage: "www.stackoverflow.com/" },
          expandedTemplate: this.collapsedRowTmpl
        }),
        new TableItem({
          data:
            "Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects."
        })
      ],
      [
        new TableItem({ data: "Angular" }),
        new TableItem({
          data:
            "Angular is a platform for building mobile and desktop web applications."
        })
      ],
      [
        new TableItem({
          data: "RxJS",
          expandedData: { homepage: "www.stackoverflow.com/" },
          expandedTemplate: this.collapsedRowTmpl
        }),
        new TableItem({
          data:
            "RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code."
        })
      ],
      [
        new TableItem({
          data: "React",
          expandedData: { homepage: "www.stackoverflow.com/" },
          expandedTemplate: this.collapsedRowTmpl
        }),
        new TableItem({
          data: "React makes it painless to create interactive UIs."
        })
      ],
      [
        new TableItem({
          data: "Vue.js",
          expandedData: { homepage: "www.stackoverflow.com/" },
          expandedTemplate: this.collapsedRowTmpl
        }),
        new TableItem({ data: "The Progressive JavaScript Framework." })
      ]
    ];
    this.jsSkillsModel.rowsClass[3] = this.jsSkillsModel.rowsClass[4] = this.jsSkillsModel.rowsClass[6] =
      "highlighted-rows";

    this.jsSkillsModel1.header = [
      new TableHeaderItem({ data: "Name" }),
      new TableHeaderItem({ data: "Description" }),
      new TableHeaderItem({ data: "" })
    ];
    this.jsSkillsModel1.data = [
      [
        new TableItem({ data: "jQuery" }),
        new TableItem({ data: "The Write Less, Do More, JavaScript Library." }),
        new TableItem({ template: this.actionCell })
      ],
      [
        new TableItem({ data: "Angular" }),
        new TableItem({
          data:
            "Angular is a platform for building mobile and desktop web applications."
        }),
        new TableItem({ template: this.actionCell })
      ],
      [
        new TableItem({ data: "React" }),
        new TableItem({
          data: "React makes it painless to create interactive UIs."
        }),
        new TableItem({ template: this.actionCell })
      ],
      [
        new TableItem({ data: "Vue.js" }),
        new TableItem({ data: "The Progressive JavaScript Framework." }),
        new TableItem({ template: this.actionCell })
      ]
    ];
  }

  renderTable(users: User[]) {
    const modelData = [];
    for (const user of users) {
      modelData.push([
        new TableItem({ data: user.name }),
        new TableItem({ data: user.email }),
        new TableItem({ data: user.address.city }),
        new TableItem({ data: { val: "" }, template: this.commentCell })
      ]);
    }
    this.usersModel.data = modelData;
    this.usersModel.selectAll();
    // this.usersModel.rowsSelected = Array(users.length).fill(true);
  }

  customSort(index: number) {
    if (this.usersModel.header[index].sorted) {
      // if already sorted flip sorting direction
      this.usersModel.header[index].ascending = this.usersModel.header[
        index
      ].descending;
    }
    this.usersModel.sort(index);
  }

  getFirstComment() {
    // 得到第一行，第四列的注释内容（不考虑复选框列）
    let comments = "";
    this.usersModel.data.forEach((row, index) => {
      if (this.usersModel.rowsSelected[index]) {
        comments += this.usersModel.data[index][3].data.val.trim() + "/";
      }
    });
    alert(comments);
  }

  onRowClick(index: number) {
    this.clickedRow = index;
  }

  deleteAction(e) {
    setTimeout(() => {
      this.jsSkillsModel1.data.splice(this.clickedRow, 1);
      console.log(this.jsSkillsModel1.data);
    }, 0);
  }
}
