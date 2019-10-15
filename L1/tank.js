function tank(action){
    // Tank steering actions
    
    switch(action) {
    case "speed":
        // get value from slider and write it to the document
        var speed = document.getElementById("speed").value;
        document.getElementById("speedvalue").innerHTML = speed;        
        break;
        
    case "forward":
    case "reverse":
    case "left":
    case "right":
    case "stop":
        document.getElementById("directionvalue").innerHTML = action;        
        break;
        
    default:
        return;
    }
} 


function camera(action){
    // Camera actions
    
    switch(action) {
    case "stop_camera":
        if (document.getElementById("stop_camera").innerHTML == "Stop camera"){
            send_cmd('ru 0');            
            document.getElementById("stop_camera").innerHTML = "Start camera";
        }
        else{
            send_cmd('ru 1');            
            document.getElementById("stop_camera").innerHTML = "Stop camera";            
        }
        break;
        
    case "save_image":
        send_cmd("im");
        break;
    
    case "record_video":
        if (document.getElementById("record_video").innerHTML == "Record video"){
            send_cmd("ca 1");            
            document.getElementById("record_video").innerHTML = "Stop recording";
        }
        else{
            send_cmd("ca 0");            
            document.getElementById("record_video").innerHTML = "Record video";            
        }
        break;
    
    case "day_night":
    case "objects_recognition":
        alert("Function " + action + " not yet  implemented");        
        break;
        
    default:
        return;
    }
} 



function system(action){
    // System actions
    
    switch(action) {
    case "reboot":
    case "power_off":
        alert("Function " + action + " not yet  implemented");            
        break;
        
    default:
        return;
    }
} 

