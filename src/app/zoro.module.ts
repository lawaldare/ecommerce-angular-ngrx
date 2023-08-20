import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';

const modules = [
  NzLayoutModule,
  NzBadgeModule,
  NzRateModule,
  NzButtonModule,
  NzSpinModule,
  NzSelectModule,
  NzTableModule,
];

@NgModule({
  imports: [modules],
  exports: [modules],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ZoroModule {}
