import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreLearningComponent } from './more-learning.component';


describe('MoreLearningComponent', () => {
  let component: MoreLearningComponent;
  let fixture: ComponentFixture<MoreLearningComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoreLearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
