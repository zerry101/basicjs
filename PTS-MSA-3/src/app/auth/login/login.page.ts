import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NavController, LoadingController, Platform, ModalController } from '@ionic/angular';

import { Plugins, StatusBarStyle } from '@capacitor/core';

import { AuthenticationService } from '../../services/authentication/authentication.service';

import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { ToastrService } from '../../services/toastr/toasts.service';
import { ActivatedRoute, Router } from '@angular/router';

const { StatusBar } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../shared/styles.scss', './login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private platform: Platform,
    private navController: NavController,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private authentication: AuthenticationService,
    private errorHandler: ErrorHandlerService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.route.queryParams.subscribe( async (params) => {
      console.log(this.router.getCurrentNavigation().extras.state);
      if(this.router.getCurrentNavigation().extras.state) {
        let session = this.router.getCurrentNavigation().extras.state.session;

        if(session && session.isSessionExpired) {
          await toastrService.create({
            color: 'danger',
            message: session.msg,
            buttons: ['Close']
          })
        }
      }
    });

    this.loginForm = this.formBuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required],
      },
    );
  }

  async ionViewWillEnter() {
    if (this.platform.is('ios') && this.platform.is('cordova')) {
      await StatusBar.setStyle({ style: StatusBarStyle.Dark });
    }
  }

  async ionViewWillLeave() {
    await this.toastrService.dismiss();
  }

  async openForgotPasswordModal() {
    await this.toastrService.dismiss();

    const modal = await this.modalController.create({
      component: ForgotPasswordPage,
      componentProps: {
        email: this.loginForm.get('email').valid ? this.loginForm.get('email').value : null,
      },
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data && this.platform.is('ios') && this.platform.is('cordova')) {
      await StatusBar.setStyle({ style: StatusBarStyle.Dark });
    }

    if (data.result) {
      this.loginForm.reset();
      await this.toastrService.create({
        color: 'success',
        message: 'Your password has been changed',
        buttons: ['Close'],
      });
    }
  }

  async onSubmit() {
    await this.toastrService.dismiss();

    if (this.loginForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Loading...',
      });

      await loading.present();

      this.authentication.login(this.loginForm.get('email').value.toLowerCase(), this.loginForm.get('password').value)
        .then(
          (success) => {
            this.navController.navigateRoot('/tabs/home');
          },
        )
        .catch(
          async (error) => {
            await this.errorHandler.handleError({ message: error.message });
          },
        )
        .finally(async () => await loading.dismiss());

    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
