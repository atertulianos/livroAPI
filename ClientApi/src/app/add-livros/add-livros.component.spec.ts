/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddLivrosComponent } from './add-livros.component';

describe('AddLivrosComponent', () => {
  let component: AddLivrosComponent;
  let fixture: ComponentFixture<AddLivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
