import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebase: AngularFireDatabase) { }
  userList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    pin: new FormControl('', [Validators.required, Validators.minLength(4)]),
    country: new FormControl('', Validators.required)
  });


  getUsers() {
    this.userList = this.firebase.list('users');
    return this.userList.snapshotChanges();
  }


  insertUser(user) {
    this.userList.push({
      fullName: user.fullName,
      address: user.address,
      city: user.city,
      pin: user.pin,
      country: user.country
    });
  }

  populateForm(user) {
    this.form.setValue(user);
  }

  updateUser(user) {
    this.userList.update(user.$key,
      {
        fullName: user.fullName,
      address: user.address,
      city: user.city,
      pin: user.pin,
      country: user.country
      });
  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }

}
