import {Component, Input} from '@angular/core';
import {Post} from './post.model';

@Component({
    selector: 'widget-post',
    template: `<div class="post">
                    <h2 class="post-title">{{post.title}}</h2>
                    <img src={{post.img}}>
                    <p class="post-description">{{post.description}}</p>
                    <a class="post-link" href={{post.link}}> Read more</a>
                    <p class="post-date"> Publication date: {{post.date}}</p>
                </div>`
})
export class WidgetPost{
    @Input() post: Post
}