import { Component, OnInit } from '@angular/core';
import { CategoryAndBookService } from '../Services/category-and-book.service';
import { Books } from '../Books';
import { Categories } from '../Categories';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  books!: Books[] ;
  selectedCategory!: number;
  categories!: Categories[] ;
  selectedBook!: number;
  constructor(private bookservice: CategoryAndBookService) {}

  ngOnInit(){
    this.getCategories();
    }
  getCategories() {
    this.bookservice.getCategories().subscribe((categories:any) => {
     this.categories = categories;
    // this.books = categories.books;
      console.log(categories);
    },
    ex=>console.log(ex))
    };

getBooksByCategory() {
  if(this.selectedCategory)
  this.bookservice.getBooksByCategory(this.selectedCategory).subscribe((books:any) => {
    this.books = books;
  });
}
}

