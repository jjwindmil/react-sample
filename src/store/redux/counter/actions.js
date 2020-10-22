//액션 타입 정의
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

//액션 생성함수 정의

export const increment = ()=>({type:INCREMENT});
export const decrement = ()=>({type:DECREMENT});

