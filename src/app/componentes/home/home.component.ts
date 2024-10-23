import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from "../btn-primary/btn-primary.component";
import { NewsletterFormComponent } from "../newsletter-form/newsletter-form.component";
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { BenefitComponent } from "../benefit/benefit.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    NgOptimizedImage,
    BtnPrimaryComponent,
    NewsletterFormComponent,
    HttpClientModule,
    BenefitComponent,
    FooterComponent
],
providers:  [HttpClient],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
