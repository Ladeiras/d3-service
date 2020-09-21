import { Injectable } from '@angular/core';
import * as d3 from './bundle-d3';
import { lasso } from 'd3-lasso';

@Injectable()
export class D3Service {
  constructor() {
    (window as any)['d3'] = d3;
  }

  get d3() {
    return (window as any)['d3'];
  }

  get lasso() {
    return lasso((window as any)['d3']);
  }
}
