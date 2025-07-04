import {Global, Module} from '@nestjs/common';
import {LocalStorageService} from './local-storage.service';

@Global()
@Module({
  providers: [LocalStorageService],
  exports: [LocalStorageService],
})
export class LocalStorageModule {}
