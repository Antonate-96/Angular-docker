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
}

var { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 1024,  // Noncompliant
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}); // Noncompliant: 1024 bits is too short for a RSA key pair

crypto.generateKeyPair('ec', {
  namedCurve: 'secp112r2',
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
}, callback);