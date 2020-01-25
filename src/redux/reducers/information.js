
const Initial_State = {
    master: ['کرمی', 'بگ محمدی', 'ولیزاده', 'تنهایی', 'شیری', 'طاهری', 'غلامی'],
    course: ['معماری', 'شبکه', 'کاماپیلر', 'جاوا', 'مدارمنطقی', 'بینایی', 'الگوریتم', 'مباحث ویژه', 'پایگاه داده', 'نرم افزار', 'طراحی زبان برنامه سازی', 'رباتیک'],
    group: [95, 96, 97, 98],
    time: ['بدون ساعت', '8-10', '10-12', '2-4', '4-6'],
    day: ['بدون روز', 'شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه'],
    rotation: ['Yes', 'No']

};


const Infromation = (state = Initial_State, action) => {

    switch (action.type) {


        default: return state;
    }



};


export default Infromation;