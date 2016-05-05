import {bootstrap} from '@angular/platform-browser-dynamic';
import {Widget} from './widget/widget.component';
import {HTTP_PROVIDERS} from '@angular/http';

bootstrap(Widget, [HTTP_PROVIDERS]);