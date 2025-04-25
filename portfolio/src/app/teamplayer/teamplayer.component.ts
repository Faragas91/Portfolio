import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [],
  templateUrl: './teamplayer.component.html',
  styleUrl: './teamplayer.component.scss'
})
export class TeamplayerComponent {
    @Input() colleagues: {
        name: string;
        projects: string;
        description: string;
    } [] = [];
}
