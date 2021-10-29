import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://20.198.105.99/user-api';
  //http://20.198.105.99/user-api/users/logIn

  constructor(private httpClient: HttpClient) { }

  public authenticate(formData: FormGroup): Observable<any> {
    const url = `${this.baseUrl}/users/logIn`;
    return this.httpClient.post(url, formData);
  }
  public registerUser(formData: FormGroup): Observable<any> {
    const url = `${this.baseUrl}/users/register`;
    return this.httpClient.post(url, formData);
  }

}
