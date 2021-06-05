import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from '@angular/animations';

export const mainAnimation = trigger('mainAnimation', [
  transition('* <=> *', [
    style({ position: 'fixed' }),
    query(':enter, :leave', [
      style({
        position: 'fixed',
        right: 0,
      }),
    ]),
    query(':enter', [style({ transform: 'translateX(-100%)' })], {
      optional: true,
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('300ms ease-out', style({ transform: 'translateX(100%)' }))],
        { optional: true }
      ),
      query(
        ':enter',
        [animate('300ms ease-out', style({ transform: 'translateX(0%)' }))],
        { optional: true }
      ),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);
