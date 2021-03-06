import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { ProductosComponent } from './productos/productos.component';
import { SliderBebidasComponent } from './slider-bebidas/slider-bebidas.component';
import { SliderPlatillosComponent } from './slider-platillos/slider-platillos.component';
import { SliderSnacksComponent } from './slider-snacks/slider-snacks.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDesactivadosComponent } from './product-desactivados/product-desactivados.component';


@NgModule({
  declarations: [ProductCarouselComponent, ProductosComponent, SliderBebidasComponent, SliderPlatillosComponent, SliderSnacksComponent, ProductCreateComponent, ProductListComponent, ProductIndexComponent, ProductShowComponent, ProductUpdateComponent, ProductDesactivadosComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class ProductModule { }
