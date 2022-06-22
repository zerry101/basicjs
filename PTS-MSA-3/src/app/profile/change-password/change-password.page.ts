import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoadingController } from '@ionic/angular';

import { CognitoService } from '../../services/cognito/cognito.service';
import { IdentityService } from '../../services/identity/identity.service';
import { ToastrService } from '../../services/toastr/toasts.service';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';

import { passwordMatchValidator, passwordWeakValidator } from '../../services/validators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['../../auth/shared/styles.scss', './change-password.page.scss'],
})
export class ChangePasswordPage {
  changePasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private cognito: CognitoService,
    private identity: IdentityService,
    private errorHandler: ErrorHandlerService,
    private toastrService: ToastrService,
  ) {
    this.changePasswordForm = this.formBuilder.group(
      {
        oldPassword: [null, Validators.required],
        newPassword: [null, [Validators.required, passwordWeakValidator]],
        newPasswordConfirmation: [null, Validators.required],
      },
      {
        validators: [passwordMatchValidator()],
      },
    );
  }

  async onSubmit() {
    if (this.changePasswordForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Loading...',
      });

      await loading.present();

      const { username } = await this.identity.getSession();

      this.cognito.changePassword(
        username.toLowerCase(),
        this.changePasswordForm.get('oldPassword').value,
        this.changePasswordForm.get('newPassword').value,
      )
      .then(
        async (success) => {
          this.changePasswordForm.reset();
          await this.toastrService.create({
            color: 'success',
            message: 'Password changed',
          });
        },
      )
      .catch(
        async (error) => {
          await this.changePasswordForm.reset();
          await this.errorHandler.handleError({ message: error.message || error.code });
        },
      )
      .finally(async () => await loading.dismiss());
    } else {
      this.changePasswordForm.markAllAsTouched();
    }
  }
}
