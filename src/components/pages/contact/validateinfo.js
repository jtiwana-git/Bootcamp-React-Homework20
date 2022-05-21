export default function validateinfo(values) {
let errors = {}

if(!values.name.trim()) {
    errors.name = "Name required";
}

if(!values.email) {
    errors.email = "Email required";
} else if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
    errors.email = "Email address is invalid";
}
if(!values.message) {
 errors.message = "Message required";
 
} else if (values.message.length < 12 ) {
    errors.message = "Message needs to be more than 12 characters"
}


return errors
}