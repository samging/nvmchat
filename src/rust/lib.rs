use std::ffi::CStr;
use std::os::raw::c_char;

#[no_mangle]
pub extern "C" fn process(message: *const c_char) {
    let c_str = unsafe { CStr::from_ptr(message) };
    let message_str = c_str.to_str().unwrap();

    let processed_m = format!("Optimized: {}",message_str)

    let c_message = std::ffi::CString::new(message_str).unwrap();
    c_message.into_raw();

}