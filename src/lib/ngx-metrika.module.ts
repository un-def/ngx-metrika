import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxMetrikaConfig} from "./interfaces";
import {NgxMetrikaService} from "./ngx-metrika.service";
import {YM_CONFIG} from "./ym.token";
import {NgxEventDirective} from "./ngx-event.directive";

@NgModule({
  declarations: [NgxEventDirective],
  exports: [NgxEventDirective],
  imports: []
})
export class NgxMetrikaModule {
  public static forRoot(config: NgxMetrikaConfig): ModuleWithProviders {
    return {
      ngModule: NgxMetrikaModule,
      providers: [
        NgxMetrikaService,
        { provide: YM_CONFIG, useValue: { trackPageViews: true, ...config } }
      ]
    };
  }
}
