import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from '@angular/animations';

export const fadeOut = trigger('fadeOut', [
  transition('* <=> *', [
    style({ position: 'fixed' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'fixed',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    query(':enter', [animate('700ms ease-out', style({ opacity: '1' }))], {
      optional: true,
    }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('700ms ease-out', style({ opacity: '0' }))], {
        optional: true,
      }),
      query(':enter', [animate('700ms ease-out', style({ opacity: '1' }))], {
        optional: true,
      }),
    ]),
    query(':enter', animateChild(), { optional: true }),
  ]),
]);
