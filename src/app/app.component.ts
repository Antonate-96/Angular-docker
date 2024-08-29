import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  example = {
    "systemId": "test",
    "userName": "test001",
    "password": "12345678",
    "ipAddress": "10.1.1.1",
    "requestData": {
      "OFFCODE": "100400",
      "INC_CODE": "410070",
      "BEGIN_DATE": ""
    }
  }
}

