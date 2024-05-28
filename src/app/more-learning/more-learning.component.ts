import { Component, inject } from '@angular/core';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';
import { Enum } from '../enum';

@Component({
  selector: 'app-more-learning',
  templateUrl: './more-learning.component.html',
  styleUrl: './more-learning.component.scss'
})
export class MoreLearningComponent {

  replaySubject = new ReplaySubject();
  dataList: string[] = [];
  dataList2: string[] = [];
  x = Enum
  localStore = inject(LocalStorageService);

  // constructor( private localStore: LocalStorageService ) {}

ngOnInit() { 
  this.processObservable();
  // this.processSubject();
  // this.processReplaySubject();
  // this.processBehaviorSubject();
  console.log( Object.keys(this.x) );
  console.log( Object.entries(this.x.second) );
  console.log( this.x.second );
}
  // Observable: 'next' can only be called within the inner implimentaion of the obervable
  public processObservable(): any {
    const observable = new Observable(observer => {
      next: setTimeout(() => observer.next('hello from Observable!'), 1000);
      complete: setTimeout(() => observer.next('Observable completed!'), 2000);
    }); 
    observable.subscribe(returnedValues => {
      this.dataList.push(returnedValues as string);
    });
  }

  public processSubject(): any {
    // Subject
    const subject = new Subject();
    subject.next('missed message from Subject');
    subject.subscribe(v => {
      this.dataList.push(v as string);
    });
    subject.next('hello from subject');
  }
  public processReplaySubject(): any {
    // ReplaySubject
    this.replaySubject.next('hello 11');
    this.replaySubject.next('hello 22');
    this.replaySubject.next('hello 33');
    this.replaySubject.next('hello 44');
    this.replaySubject.subscribe((v) => {
      this.dataList.push(v as string);
    });
    this.replaySubject.next('hello 55');
    this.replaySubject.subscribe((v) =>   {
      this.dataList2.push(v as string);
    });
  }

  public processBehaviorSubject(): any {
    // BehaviorSubject
    const behaviorSubject = new BehaviorSubject('Initial value BS');
    // behaviorSubject.next('Before subscribe');
    behaviorSubject.next('2nd value BS');
    
    behaviorSubject.next('3rd value BS');
    behaviorSubject.next('4th value BS');
    behaviorSubject.subscribe((v) => {
      this.dataList.push(v);
    });
    behaviorSubject.next('5th value BS');
  }

  public removeData() {
    if (this.localStore.getData('hello') === null) {
      alert(' its empty ');
    } 
    else {
      this.localStore.removeData('hello');
    }
    
  }
  public setData() {
    this.localStore.saveData('hello','mammy');
  }


}
