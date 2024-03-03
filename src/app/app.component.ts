import { Component } from '@angular/core';
import { AppService } from './app.service';
import { NotificationDTO } from './app.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDatepickerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private service: AppService, private snackBar: MatSnackBar) {
  }
  public notification: NotificationDTO = {
    subject: '',
    recipient: '',
    body: '',
    dueDate: new Date()
  };
  public horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public timer: number = 3000;

  onClickCriar() {
    if (this.notification.subject == null
      || this.notification.recipient == null
      || this.notification.body == null
      || this.notification.dueDate == null) {
      alert('Verifique os valores e tente novamente.');
      return;
    }

    this.service.UpdateSalary(this.notification)
      .subscribe({
        next: this.handleSuccess.bind(this),
        error: this.handleError.bind(this)
      });
  }

  handleSuccess(): void {
    this.snackBar.open(`Notificação cadastrada!`, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.timer
    });
  }

  handleError(): void {
    this.snackBar.open('Erro, favor contatar o Maggie Hub!', 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.timer
    });
  }
}
