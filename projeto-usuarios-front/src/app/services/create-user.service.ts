import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUserRequest } from '../interfaces/user-request.interface';
import { ICreateUserResponse } from '../interfaces/create-user-response.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  private readonly _httpClient = inject(HttpClient);

  createUser(newUser: IUserRequest) {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    const headers = new HttpHeaders().set('useAuth', 'y');

    return this._httpClient.post<ICreateUserResponse>(
      'http://localhost:3000/create-user',
      newUser,
      {
        headers,
        context: new HttpContext().set(AUTH_TOKEN_ENABLED, true),
      }
    );
  }
}
