import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoreModule } from "./core/core.module";

import { ButtonComponent } from "./button/button.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ComboboxComponent } from "./combobox/combobox.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { HomeComponent } from "./core/home/home.component";
import { LoadingComponent } from "./loading/loading.component";
import { ModalComponent } from "./modal/modal.component";
import { NotificationComponent } from "./notification/notification.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { SearchComponent } from "./search/search.component";
import { SelectComponent } from "./select/select.component";
import { SideNavigationComponent } from "./side-navigation/side-navigation.component";
import { ProgressIndicatorComponent } from "./progress-indicator/progress-indicator.component";
import { RadioComponent } from "./radio/radio.component";
import { TabComponent } from "./tab/tab.component";
import { TableComponent } from "./table/table.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { TileComponent } from "./tile/tile.component";
import { TooltipComponent } from "./tooltip/tooltip.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "button", component: ButtonComponent },
  { path: "checkbox", component: CheckboxComponent },
  { path: "combobox", component: ComboboxComponent },
  { path: "datepicker", component: DatepickerComponent },
  { path: "dropdown", component: DropdownComponent },
  { path: "home", component: HomeComponent },
  { path: "loading", component: LoadingComponent },
  { path: "modal", component: ModalComponent },
  { path: "notification", component: NotificationComponent },
  { path: "progress-indicator", component: ProgressIndicatorComponent },
  { path: "radio", component: RadioComponent },
  { path: "search", component: SearchComponent },
  { path: "select", component: SelectComponent },
  { path: "side-navigation", component: SideNavigationComponent },
  { path: "table", component: TableComponent },
  { path: "tab", component: TabComponent },
  { path: "textarea", component: TextareaComponent },
  { path: "tile", component: TileComponent },
  { path: "tooltip", component: TooltipComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
