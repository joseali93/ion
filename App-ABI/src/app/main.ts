import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//export PATH=$PATH:/opt/gradle/gradle-4.9/bin
//./gradlew wrapper --gradle-version=4.9 --distribution-type=bin