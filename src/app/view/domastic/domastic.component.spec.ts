import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomasticComponent } from './domastic.component';

describe('DomasticComponent', () => {
  let component: DomasticComponent;
  let fixture: ComponentFixture<DomasticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomasticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DomasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
