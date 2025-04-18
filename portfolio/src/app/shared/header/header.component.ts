import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { TitleComponent } from "../../title/title.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
