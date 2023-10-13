import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IdeeclePage } from './ideecle.page';

describe('IdeeclePage', () => {
  let component: IdeeclePage;
  let fixture: ComponentFixture<IdeeclePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IdeeclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
