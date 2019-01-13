import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }
  submitted: boolean;
  formControls = this.userService.form.controls;
  showSuccessMessage: boolean;
  
  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    if (this.userService.form.valid) {
      if (this.userService.form.get('$key').value == null)
        this.userService.insertUser(this.userService.form.value);
      else
        this.userService.updateUser(this.userService.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.userService.form.reset();
      this.userService.form.setValue({
        $key: null,
        fullName: '',
        address: '',
        city: '',
        pin: '',
        country: ''
      });
    }
  }

}
