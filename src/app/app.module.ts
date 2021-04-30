import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CarbonModule } from './carbon.module';

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
import { ErrorInterceptor } from "./core/interceptors";

import { AppComponent } from "./app.component";
import { ButtonComponent } from "./button/button.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { ComboboxComponent } from "./combobox/combobox.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { LoadingComponent } from "./loading/loading.component";
import { ModalComponent } from "./modal/modal.component";
import { NotificationComponent } from "./notification/notification.component";
import { ProgressIndicatorComponent } from "./progress-indicator/progress-indicator.component";
import { RadioComponent } from "./radio/radio.component";
import { SearchComponent } from "./search/search.component";
import { SelectComponent } from "./select/select.component";
import { SideNavigationComponent } from "./side-navigation/side-navigation.component";
import { StepProgressBarComponent } from "./progress-indicator/step-progress-bar/step-progress-bar.component";
import { TabComponent } from "./tab/tab.component";
import { TableComponent } from "./table/table.component";
import { TextareaComponent } from "./textarea/textarea.component";
import { TileComponent } from "./tile/tile.component";
import { TooltipComponent } from "./tooltip/tooltip.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarbonModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckboxComponent,
    ComboboxComponent,
    DatepickerComponent,
    DropdownComponent,
    LoadingComponent,
    ModalComponent,
    NotificationComponent,
    ProgressIndicatorComponent,
    RadioComponent,
    SearchComponent,
    SelectComponent,
    StepProgressBarComponent,
    SideNavigationComponent,
    TabComponent,
    TableComponent,
    TextareaComponent,
    TileComponent,
    TooltipComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
