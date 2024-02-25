import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spaceshift4Component } from './spaceshift4.component';

describe('Spaceshift4Component', () => {
  let component: Spaceshift4Component;
  let fixture: ComponentFixture<Spaceshift4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spaceshift4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Spaceshift4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
