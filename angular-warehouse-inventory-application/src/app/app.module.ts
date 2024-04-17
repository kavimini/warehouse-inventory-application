import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { InventoryAddComponent } from './inventory/inventory-add/inventory-add.component';
import { InventoryUpdateComponent } from './inventory/inventory-update/inventory-update.component';
import { InboundComponent } from './inbound/inbound.component';
import { InboundAddComponent } from './inbound/inbound-add/inbound-add.component';
import { LoginComponent } from './login/login.component';
import { OutboundComponent } from './outbound/outbound.component';
import { OutboundAddComponent } from './outbound/outbound-add/outbound-add.component';
import { UserComponent } from './users/users.component';
import { UserAddComponent } from './users/users-add/users-add.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryAddComponent,
    InventoryUpdateComponent,
    InboundComponent,
    InboundAddComponent,
    OutboundComponent,
    OutboundAddComponent,
    LoginComponent,
    UserComponent,
    UserAddComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
