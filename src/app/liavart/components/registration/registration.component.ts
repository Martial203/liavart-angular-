import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { setSessionInfos } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  formInfos$!: Observable<any>
  url: any = "/assets/blankProfilePicture.png";
  msg!: string;
  urlRegex: RegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  user!: User;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private store: Store<{user: User}>, private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: [null, [Validators.required, ]],
      name: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      country: [null, [Validators.required]],
      town: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirm: [null, [Validators.required]],
      // website: [null, [Validators.pattern(this.urlRegex)]],
      avatar: ["/assets/blankProfilePicture.png"],
      description: [null, [Validators.required]]
    });

    this.formInfos$ = this.registrationForm.valueChanges.pipe(
      tap(value => console.log(value))
    );
  }

  onSubmitForm(){
    this.user = {
      id: this.userService.getTheNumberOfUsers(),
      firstName: this.registrationForm.value.firstName,
      name: this.registrationForm.value.name,
      gender: this.registrationForm.value.gender,
      country: this.registrationForm.value.country,
      town: this.registrationForm.value.town,
      email: this.registrationForm.value.email,
      userName: this.registrationForm.value.userName,
      password: this.registrationForm.value.password,
      avatar: this.url,
      description: this.registrationForm.value.description
    };

    this.userService.addAUser(this.user);
    this.store.dispatch(setSessionInfos({user: this.user}));
    this.router.navigateByUrl('/liavart/main-page/-1');
  }

  selectFile(event: any) { //Angular 11, for stricter type
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			return;
		}

		var mimeType = event.target.files[0].type;

		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);

		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
		}
	}

}
