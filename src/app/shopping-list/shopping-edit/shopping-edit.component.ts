import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName',{static:false})inputNameRef: ElementRef;
  @ViewChild('inputAmount',{static:false})inputAmountRef: ElementRef;
  @Output() ingredientAdded= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onItemAdd(){
    const newIngredient= new Ingredient(this.inputNameRef.nativeElement.value,this.inputAmountRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
}
