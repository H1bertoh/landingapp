import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss'
})
export class BtnPrimaryComponent {
  @Input("btn-text") btnText: string = "";
  @Input() disable: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants ="primary"
  @Output("sbmit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
