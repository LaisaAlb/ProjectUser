import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IUserRequest } from '../interfaces/user-request.interface';
import { IUpdateUserResponse } from '../interfaces/update-user-response.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {
  private readonly _httpClient = inject(HttpClient);

  updateUser(userInfos: IUserRequest) {
    // const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token')!);

    const headers = new HttpHeaders().set('useAuth', 'y');

    return this._httpClient.put<IUpdateUserResponse>(
      'http://localhost:3000/update-user',
      userInfos,
      {
        headers,
        context: new HttpContext().set(AUTH_TOKEN_ENABLED, true),
      }
    ).pipe(
      map((updateUserResponse) => {
        localStorage.setItem('token', updateUserResponse.token);

        return updateUserResponse;
      }),
    );
  }
}
