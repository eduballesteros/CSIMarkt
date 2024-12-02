import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000'; // URL base de la API Mock

  constructor(private http: HttpClient) {}

  // Registrar un nuevo usuario
  register(username: string, email: string, password: string): Observable<any> {
    const user = { username, email, password };  // Incluye el email
    return this.http.post(`${this.apiUrl}/users`, user).pipe(
      catchError(() => of({ success: false, message: 'Error al registrar el usuario' }))
    );
  }


  // Verificar si el correo ya está registrado
  checkEmailExists(email: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe(
      map(users => {
        return users.some(user => user.email === email);  // Verificar si el email ya existe
      }),
      catchError(() => of(false))  // Si hay un error, devolvemos false
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/users`).pipe( // Solicitar todos los usuarios
      map(users => {
        // Buscar si existe un usuario con el email correcto y la contraseña correcta
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
          return { success: true, message: 'Inicio de sesión exitoso' };  // Credenciales correctas
        } else {
          return { success: false, message: 'Correo o contraseña incorrectos' };  // Credenciales incorrectas
        }
      }),
      catchError(() => of({ success: false, message: 'Error al validar las credenciales' }))  // Manejo de errores
    );
  }

}
