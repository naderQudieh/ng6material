import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUserDetailsComponent } from './blog-user-details.component';

describe('BlogUserDetailsComponent', () => {
  let component: BlogUserDetailsComponent;
  let fixture: ComponentFixture<BlogUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
