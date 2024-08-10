import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StripemodalComponent } from '../stripemodal/stripemodal.component';
import { StripeService } from 'src/app/services/stripe.service';
import { StripeElementsOptions, StripePaymentElementOptions} from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  standalone: false,
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent implements OnInit{

//  @Input() nombre: any;
//
//  error: any;
//  elements: Elements;
//  card: StripeElement;
//
//  public modalService = inject(NgbModal);
//  public stripeService = inject(StripeService);
//
//  constructor(){}
//
 ngOnInit(): void {}
//
//  abrirModal(nombre: string){
//    const modalRef = this.modalService.open(StripemodalComponent);
//    modalRef.componentInstance.nombre
//  }
//
//
//
//  @ViewChild(StripePaymentElementComponent)
//  paymentElement!: StripePaymentElementComponent;
//
//  private readonly fb = inject(UntypedFormBuilder);
//
//  paymentElementForm = this.fb.group({
//    name: ['John Doe', [Validators.required]],
//    email: ['support@ngx-stripe.dev', [Validators.required]],
//    address: [''],
//    zipcode: [''],
//    city: [''],
//    amount: [2500, [Validators.required, Validators.pattern(/\d+/)]]
//  });
//
//  elementsOptions: StripeElementsOptions = {
//    locale: 'en',
//    clientSecret: '{{YOUR_CLIENT_SECRET}}',
//    appearance: {
//      theme: 'flat'
//    }
//  };
//
//  paymentElementOptions: StripePaymentElementOptions = {
//    layout: {
//      type: 'tabs',
//      defaultCollapsed: false,
//      radios: false,
//      spacedAccordionItems: false
//    }
//  };
//
//  // Replace with your own public key
//  stripe = injectStripe({{YOUR_PUBLIC_KEY}});
//  paying = signal(false);
//
//  pay() {
//    if (this.paying() || this.paymentElementForm.invalid) return;
//    this.paying.set(true);
//
//    const {
//      name,
//      email,
//      address,
//      zipcode,
//      city
//    } = this.checkoutForm.getRawValue();
//
//    this.stripe
//      .confirmPayment({
//        elements: this.paymentElement.elements,
//        confirmParams: {
//          payment_method_data: {
//            billing_details: {
//              name: name as string,
//              email: email as string,
//              address: {
//                line1: address as string,
//                postal_code: zipcode as string,
//                city: city as string
//              }
//            }
//          }
//        },
//        redirect: 'if_required'
//      })
//      .subscribe(result => {
//        this.paying.set(false);
//        if (result.error) {
//          // Show error to your customer (e.g., insufficient funds)
//          alert({ success: false, error: result.error.message });
//        } else {
//          // The payment has been processed!
//          if (result.paymentIntent.status === 'succeeded') {
//            // Show a success message to your customer
//            alert({ success: true });
//          }
//        }
//      });
//  }
//
}
