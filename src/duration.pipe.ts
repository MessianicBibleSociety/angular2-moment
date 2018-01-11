import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'amDuration' })
export class DurationPipe implements PipeTransform {
  transform(value: any, ...args: string[]): string {
    if (typeof args === 'undefined' || args.length !== 1) {
      throw new Error('DurationPipe: missing required time unit argument');
    }
    return moment.duration(value, args[0] as moment.unitOfTime.DurationConstructor).humanize();
  }
}

@Pipe({ name: 'amDurationFormat' })
export class DurationPipeFormat implements PipeTransform {
  transform(value: any, ...args: string[]): string {
    if (typeof args === 'undefined' || args.length !== 2) {
      throw new Error('DurationPipe: missing required time unit argument and format string');
    }
    return moment.duration(value, args[0] as moment.unitOfTime.DurationConstructor).format(args[1]);
  }
}
