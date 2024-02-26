import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift7Component } from './spaceshift7.component';

describe('Spaceshift7Component', () => {
  let component: Spaceshift7Component;
  let fixture: ComponentFixture<Spaceshift7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
