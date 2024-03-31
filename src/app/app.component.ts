import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'domusbdsmgalicia';

  public sidebarItems = [
    { label: 'Inicio', icon: 'home', url: './' },
    { label: 'Galería', icon: 'photo_library', url: './galeria' },
    { label: 'Talleres', icon: 'home_repair_service', url: './talleres' },
    { label: 'Alquiler', icon: 'real_estate_agent', url: './alquiler' },
    { label: 'Eventos', icon: 'calendar_month', url: './eventos' },
    { label: 'Contacto', icon: 'contact_support', url: './contacto' },
    { label: 'Normas', icon: 'gavel', url: './normas' },
    { label: 'Socios', icon: 'group', url: './socios' },
    { label: 'Política de cookies', icon: 'cookie', url: './politica-de-cookies' },
  ];
}
