import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { NgxLoadingModule } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// UI5 Web Components used
import '@ui5/webcomponents-base/dist/features/browsersupport/Edge';
import '@ui5/webcomponents-fiori/dist/ShellBar';
import '@ui5/webcomponents/dist/Button';
import '@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js'
import '@ui5/webcomponents/dist/Title';
import '@ui5/webcomponents/dist/Input';
import '@ui5/webcomponents/dist/DatePicker';
import '@ui5/webcomponents/dist/List';
import '@ui5/webcomponents-icons/dist/icons/employee.js';
import '@ui5/webcomponents-icons/dist/Assets.js';
import '@ui5/webcomponents-icons/dist/icons/accelerated.js';
import '@ui5/webcomponents-icons/dist/icons/accept.js';
import '@ui5/webcomponents-icons/dist/icons/zoom-out.js';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents/dist/CustomListItem';
import '@ui5/webcomponents/dist/Panel';
import '@ui5/webcomponents/dist/Dialog';
import '@ui5/webcomponents/dist/Label';
import '@ui5/webcomponents/dist/TextArea';
import '@ui5/webcomponents/dist/StandardListItem';
import '@ui5/webcomponents/dist/TabContainer';
import '@ui5/webcomponents/dist/Tab';
import '@ui5/webcomponents/dist/TabSeparator';
import '@ui5/webcomponents-fiori/dist/SideNavigation.js';
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-theme-base/dist/Assets.js";
import "@ui5/webcomponents/dist/Popover.js";
import "@ui5/webcomponents/dist/SegmentedButton";
import "@ui5/webcomponents/dist/ToggleButton";
import '@ui5/webcomponents-fiori/dist/SideNavigationItem.js';
import '@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js';
import '@ui5/webcomponents-fiori/dist/ProductSwitch.js';
import '@ui5/webcomponents-fiori/dist/ProductSwitchItem.js';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";
import "@ui5/webcomponents/dist/Card";
import '@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js';

// components
import { LivrosComponent } from './livros/livros.component';
import { TitulosComponent } from './titulos/titulos.component';
import { NavComponent } from './nav/nav.component';
import { EditLivrosComponent } from './edit-livros/edit-livros.component';
import { AddLivrosComponent } from './add-livros/add-livros.component';
import { DeleteLivrosComponent } from './delete-livros/delete-livros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './components/loader/loader.component';




const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    LivrosComponent,
      TitulosComponent,
      NavComponent,
      EditLivrosComponent,
      AddLivrosComponent,
      DeleteLivrosComponent,
      DashboardComponent,
      LoaderComponent
   ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    OrderModule,
    NgxLoadingModule.forRoot({}),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass:'toast-top-center',
      progressBar: true,

    }),
  ],
    exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
