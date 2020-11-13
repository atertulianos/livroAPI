/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditLivrosComponent } from './edit-livros.component';

describe('EditLivrosComponent', () => {
  let component: EditLivrosComponent;
  let fixture: ComponentFixture<EditLivrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLivrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
