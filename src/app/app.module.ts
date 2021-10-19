import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Para hacer las peticiones AJAX
import { HttpClientModule } from '@angular/common/http';

//Para que funcione trabajar con <form>
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
import { MiComponente } from "./components/mi-Componente/mi-Componente.component";
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { MpeliculaComponent } from './components/mpelicula/mpelicula.component';

import { EsParPipe } from './pipes/espar.pipe';

@NgModule({
  declarations: [
    AppComponent, MiComponente, PeliculasComponent, PruebasComponent, HeaderComponent, SliderComponent, SiderbarComponent, FooterComponent, HomeComponent, BlogComponent, FormularioComponent, PaginaComponent, ErrorComponent, MpeliculaComponent,

    EsParPipe
  ],
  imports: [
    BrowserModule,

    routing,

    FormsModule,

    HttpClientModule
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
