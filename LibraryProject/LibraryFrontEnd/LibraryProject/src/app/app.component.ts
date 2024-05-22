import { Component, OnInit } from '@angular/core';
import { CategoryAndBookService } from './Services/category-and-book.service';
import { Categories } from './Categories';
import { Books } from './Books';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'LibraryProject';
  categories!: Categories[] ;
  books!: Books[] ;
  selectedCategory!: number;
  selectedBook!: number;
  bookService: any;

  constructor(private bookservice: CategoryAndBookService) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.bookservice.getCategories().subscribe((categories:any) => {
      this.books = categories.books;
    });
  }

  getBooksByCategory() {
    this.bookService.getBooksByCategory(this.selectedCategory).subscribe((books:any) => {
      this.books = books;
    });
  }
}

