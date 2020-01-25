export const myClass = ['301', '302', '101'];
export const prof = ['Bag-Mohammadi', 'Valizade', 'Karami', 'Shiri', 'Tanhaee'];
export const group = ['97', '96','95'];
export const course = ['Memari', 'Compiler', 'Computer Vision', 'Network', 'DLC', 'Java', 'Algorithm', 'Software', 'vije','Signals', 'Nazariye', 'khareg'];
export const course_number = [0, 1, 2, 3, 4, 5, 6, 7, 8];
export const exam_date = [];
export const Enrollment = [];
export const enroll_prof = [];
export const enroll_course = [];
export const enroll_group = [];
export const enroll_o_or_e = [];
export const enroll_day_restrictions = [];
export const enroll_hour_restrictions = [];
export const enroll_date_held = [];
export const eroll_date_held_isV = [];

export const getRandomClass = ()=>{
    return Math.floor(Math.random()*myClass.length);
}
export const getRandomHour = ()=>{
    return Math.floor(Math.random()*3);
}
export const getRandomDay = ()=>{
    return Math.floor(Math.random()*4);
}

export let bestOverAll = {fitness:0};