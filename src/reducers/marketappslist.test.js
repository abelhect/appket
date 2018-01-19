import listReducer from './marketappslist';

describe('markelapplistReducer', ()=>{
  it('should return an array of objects as its' +
  ' initial state', ()=>{
    const list = [
      {
        "name": "ShoppingCart",
        "intro": "This is a simple shopping cart that will enable your e-commerce site to add products and sell products online with ease.",
        "thumbnail":"/static/media/shoppingcart_thumb.15126a74.png"
      },

      {
        "name":"ReminderPro",
        "intro":"ReminderPro Intro",
        "thumbnail":"../images/reminderpro_thumb.png"
      },

      {
        "name":"PomodoroTimer",
        "intro":"Pomodoro Intro",
        "thumbnail":"/static/media/pomodorotimer_thumb.a18f2283.png"
      },

      {
        "name":"GoalCoach",
        "intro":"Goalcoach Intro",
        "thumbnail": "/static/media/goalcoach_thumb.6fec7420.png"
      }
    ];
    expect(listReducer(undefined,{})).toEqual(list);
  });
});
