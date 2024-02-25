import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { MainComponent } from "../main/main.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-presentation-page',
    standalone: true,
    templateUrl: './presentation-page.component.html',
    styleUrl: './presentation-page.component.css',
    imports: [HeaderComponent, MainComponent, FooterComponent]
})
export class PresentationPageComponent {

}
