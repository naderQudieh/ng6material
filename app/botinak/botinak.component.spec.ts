import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotinakComponent } from './botinak.component';

describe('BotinakComponent', () => {
  let component: BotinakComponent;
  let fixture: ComponentFixture<BotinakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotinakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotinakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
