import {Component} from 'angular2/core';
import {AuthorService} from './authors.service';

@Component({
    selector: 'authors',
    template: `
    <h2>Authors</h2>
    {{title}}
    <ul>
        <li *ngFor="#author of authors">{{author}}</li>
    </ul>
    `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title: string = "Title for list of authors";
    authors: string[];

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}