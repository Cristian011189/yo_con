import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DataUserService } from 'src/app/services/data-user.service';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  Validators,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  public userFrom: FormGroup;

  users: any[] = [];
  createUserStatus: 'success' | 'error' | null = null; // Declaración de la propiedad

  constructor(
    private DataUserService: DataUserService,
    public formbuilder: FormBuilder
  ) {
    this.userFrom = this.formbuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      edad: ['', [Validators.required]],
    });
  }

  send(data: any) {
    this.createUserStatus = null; // Reinicia el estado
    this.DataUserService.createUser(data).subscribe(
      (response) => {
        console.log(response);
        this.createUserStatus = 'success'; // Éxito en la creación
      },
      (error) => {
        console.error(error);
        this.createUserStatus = 'error'; // Error en la creación
      }
    );
  }

  ngOnInit(): void {}
}
