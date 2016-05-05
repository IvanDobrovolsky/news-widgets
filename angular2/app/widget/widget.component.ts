import { Component, OnInit } from '@angular/core';
import { WidgetPost }        from './post.component';
import { Post }              from './post.model';
import { HTTP_PROVIDERS }    from '@angular/http';
import { WidgetService }     from './widget.service';

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
    directives: [WidgetPost],
    providers: [HTTP_PROVIDERS, WidgetService]
})
export class Widget implements OnInit{

    posts: Post[];

    constructor(private widgetService: WidgetService){}

    ngOnInit(){
        this.widgetService
            .getPosts()
            .subscribe(posts => this.posts = posts, error => console.error(`An error has occurred! ${error}`));
    }

}