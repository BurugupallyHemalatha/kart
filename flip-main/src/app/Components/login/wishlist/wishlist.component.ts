import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

 
  constructor() { }
  public name=["hema","ngfor","ngif","ngswitch"]
public numbers:any=[];
displayName=true;
message = "I'm read only!";
  canEdit = true;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
  ngOnInit(): void {
    for(let i=1;i<=10;i++){
      this.numbers.push(i)
    }
  }
}