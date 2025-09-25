
let something: void = undefined;  


let nothing: never; 


function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}

throwError("Đây là lỗi minh họa");
