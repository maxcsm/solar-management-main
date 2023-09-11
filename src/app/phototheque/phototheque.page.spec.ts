import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotothequePage } from './phototheque.page';

describe('PhotothequePage', () => {
  let component: PhotothequePage;
  let fixture: ComponentFixture<PhotothequePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhotothequePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
