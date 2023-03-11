import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations';

export class Animations {
    static fadeIn(duration: string): AnimationTriggerMetadata {
        return trigger('fadeIn', [
            state('void', style({ opacity: 0 })),
            transition(':enter', [
                animate(duration, style({ opacity: 1 }))
            ]),
            transition(':leave', [
                animate(duration, style({ opacity: 0 }))
            ])
        ]);
    }

    static fadeOut(duration: string): AnimationTriggerMetadata {
        return trigger('fadeOut', [
            state('*', style({ opacity: 1 })),
            transition(':leave', [
                animate(duration, style({ opacity: 0 }))
            ])
        ]);
    }

    static fadeUp(duration: string): AnimationTriggerMetadata {
        return trigger('fadeUp', [
            state('void', style({ opacity: 0, transform: 'translateY(50px)' })),
            transition(':enter', [
                animate(duration, style({ opacity: 1, transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ opacity: 0, transform: 'translateY(50px)' }))
            ])
        ]);
    }

    static fadeDown(duration: string): AnimationTriggerMetadata {
        return trigger('fadeDown', [
            state('void', style({ opacity: 0, transform: 'translateY(-50px)' })),
            transition(':enter', [
                animate(duration, style({ opacity: 1, transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ opacity: 0, transform: 'translateY(-50px)' }))
            ])
        ]);
    }

    static slideIn(duration: string, distance: string): AnimationTriggerMetadata {
        return trigger('slideIn', [
            state('void', style({ transform: `translateX(${distance})` })),
            transition(':enter', [
                animate(duration, style({ transform: 'translateX(0)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ transform: `translateX(${distance})` }))
            ])
        ]);
    }

    static slideOut(duration: string, distance: string): AnimationTriggerMetadata {
        return trigger('slideOut', [
            state('*', style({ transform: 'translateX(0)' })),
            transition(':leave', [
                animate(duration, style({ transform: `translateX(${distance})` }))
            ])
        ]);
    }

    static slideInRight(duration: string): AnimationTriggerMetadata {
        return trigger('slideInRight', [
            state('void', style({ transform: 'translateX(-100%)' })),
            transition(':enter', [
                animate(duration, style({ transform: 'translateX(0)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ transform: 'translateX(100%)' }))
            ])
        ]);
    }

    static slide(duration: string, flag: boolean): AnimationTriggerMetadata {

        return  trigger('slide', [
            state('0', style({ transform: 'translateX(0)' })),
            state('1', style({ transform: 'translateX(0)' })),
            state('-1', style({ transform: 'translateX(0)' })),
            
            // transition(':leave', animate('500ms', style({ transform: `translateX(100%)` }))),
            transition('-1 => 1', animate('500ms', style({ transform: `translateX(-100%)` }))),
            transition('1 => -1', animate('500ms', style({ transform: `translateX(100%)` }))),
            // transition('1 => 0', animate('500ms ease-out')),
            // transition('-1 => 0', animate('500ms ease-out'))
          ])


    }

    static slideOutLeft(duration: string): AnimationTriggerMetadata {
        return trigger('slideOutLeft', [
            state('*', style({ transform: 'translateX(0)' })),
            transition(':leave', [
                animate(duration, style({ transform: `translateX(100%)` }))
            ])
        ]);
    }

    static slideOutRight(duration: string): AnimationTriggerMetadata {
        return trigger('slideOutRight', [
            state('*', style({ transform: 'translateX(0)' })),
            transition(':leave', [
                animate(duration, style({ transform: `translateX(-100%)` }))
            ])
        ]);
    }

    static slideInLeft(duration: string): AnimationTriggerMetadata {
        return trigger('slideInLeft', [
            state('void', style({ transform: 'translateX(100%)' })),
            transition(':enter', [
                animate(duration, style({ transform: 'translateX(0)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ transform: 'translateX(-100%)' }))
            ])
        ]);
    }

    static slideInUp(duration: string): AnimationTriggerMetadata {
        return trigger('slideInUp', [
            state('void', style({ transform: 'translateY(100%)' })),
            transition(':enter', [
                animate(duration, style({ transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ transform: 'translateY(-100%)' }))
            ])
        ]);
    }

    static slideInDown(duration: string): AnimationTriggerMetadata {
        return trigger('slideInDown', [
            state('void', style({ transform: 'translateY(-100%)' })),
            transition(':enter', [
                animate(duration, style({ transform: 'translateY(0)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ transform: 'translateY(-100%)' }))
            ])
        ]);
    }

    static scaleIn(duration: string, scale: number): AnimationTriggerMetadata {
        return trigger('scaleIn', [
            state('void', style({ transform: `scale(${scale})` })),
            transition(':enter', [
                animate(duration, style({ transform: 'scale(1)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ transform: `scale(${scale})` }))
            ])
        ]);
    }

    static scaleOut(duration: string, scale: number): AnimationTriggerMetadata {
        return trigger('scaleOut', [
            state('*', style({ transform: 'scale(1)' })),
            transition(':leave', [
                animate(duration, style({ transform: `scale(${scale})` }))
            ])
        ]);
    }

    static rotateIn(duration: string, degrees: number): AnimationTriggerMetadata {
        return trigger('rotateIn', [
            state('void', style({ transform: `rotate(-${degrees}deg)` })),
            transition(':enter', [
                animate(duration, style({ transform: 'rotate(0)' }))
            ]),
            transition(':leave', [
                animate(duration, style({ transform: `rotate(${degrees}deg)` }))
            ])
        ]);
    }

    static rotateOut(duration: string, degrees: number): AnimationTriggerMetadata {
        return trigger('rotateOut', [
            state('*', style({ transform: 'rotate(0)' })),
            transition(':leave', [
                animate(duration, style({ transform: `rotate(${degrees}deg)` }))
            ]),
            transition(':enter', [
                animate(duration, style({ transform: 'rotate(0)' }))
            ])
        ]);
    }


}