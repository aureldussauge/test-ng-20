import {
  ApplicationConfig,
  mergeApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';

import { appConfig } from './app.config';

const clientConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners()],
};

export const config = mergeApplicationConfig(appConfig, clientConfig);
