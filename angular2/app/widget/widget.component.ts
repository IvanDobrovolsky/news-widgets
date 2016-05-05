import {Component} from '@angular/core';
import {WidgetPost} from './post.component';
import {Post} from './post.model';

@Component({
    selector: 'widget',
    template: `<div id="widget">
                    <h1>News widget application!</h1>
                    <ul>
                        <li *ngFor="let post of posts">
                            <widget-post [post]="post"></widget-post>
                        </li>
                    </ul>
               </div>`,
    directives: [WidgetPost]
})
export class Widget{

    posts: Post[];

    constructor(){
        this.posts = [
            {
                id: 1,
                title: "Post1",
                img: "http://www.w3schools.com/angular/pic_angular.jpg",
                description: "post1 description",
                link: "google.com",
                date: new Date()
            },
            {
                id: 2,
                title: "Post2",
                img: "https://angularjs.org/img/angular-u-logo.png",
                description: "post2 description",
                link: "google.com",
                date: new Date()
            }
        ]
    }


}