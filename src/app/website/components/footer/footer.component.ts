import { Component } from '@angular/core';

import {environment} from "../../../../enviroments/enviroment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerImage: string = environment.ASSETS_LOCATION + '/img/logoINE_blanco.png'

}
