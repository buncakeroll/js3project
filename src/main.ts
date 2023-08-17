import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // All Angular projects have at least one module known as AppModule.

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
