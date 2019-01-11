import { ReversePipe } from './../../../../pipes-assignment-start/src/app/reverse.pipe';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DataService } from '../shared/data.service';

describe('ReversePipe', () => {


  it('should reverse any given string', () => {

    const reversePipe = new ReversePipe();

    expect(reversePipe.transform('Angular Pipe Test')).toEqual('tseT epiP ralugnA');


});


});
