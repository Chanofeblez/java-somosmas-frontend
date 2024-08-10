import { Component, inject, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { StripeService } from 'src/app/services/stripe.service';

@Component({
  selector: 'app-stripemodal',
  standalone: false,
  templateUrl: './stripemodal.component.html',
  styleUrl: './stripemodal.component.scss'
})
export class StripemodalComponent implements OnInit{

  @Input() nombre: any;

  public activeModal = inject( NgbActiveModal );
  public stripeService = inject( StripeService );
  public toastrService = inject( ToastrService );
  //public dialogRef= inject(MatDialogRef<StripemodalComponent>);

  constructor(){}

  ngOnInit(): void {

  }

  onClose(): void {
    this.activeModal.close();
  }

  confirmar(id: string){
    this.stripeService.confirmar(id).subscribe(
      data => {
        this.toastrService.success
        ('Pago confirmado', 'Se ha confirmado el pago con nombre' ,{positionClass:'toast-top-center', timeOut:3000}); //+ data[`nombre`]
        this.activeModal.close();
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
  }

  cancelar(id: string){
    this.stripeService.cancelar(id).subscribe(
      data => {
        this.toastrService.success
        ('Pago cancelado', 'Se ha cancelado el pago con nombre' ,{positionClass:'toast-top-center', timeOut:3000}); //+ data[`nombre`]
        this.activeModal.close();
      },
      err => {
        console.log(err);
        this.activeModal.close();
      }
    );
  }


}
