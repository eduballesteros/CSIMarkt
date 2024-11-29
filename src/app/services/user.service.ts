import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';  // Asegúrate de importar 'map'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL base de la API Mock

  constructor(private http: HttpClient) {}

  // Registrar un nuevo usuario
  register(username: string, password: string): Observable<any> {
    const user = { username, password };
    // Simula un POST a la API Mock para registrar un usuario
    return this.http.post(`${this.apiUrl}/users`, user).pipe(
      catchError(() => of({ success: false, message: 'Error al registrar el usuario' }))
    );
  }

  // Validar las credenciales de inicio de sesión
  login(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      catchError(() => of([])),
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);
        return user ? { success: true, message: 'Inicio de sesión exitoso' } : { success: false, message: 'Credenciales incorrectas' };
      })
    );
  }
}
