const uav_params = require('./uav_params');

console.log(uav_params.g);
console.log(uav_params.rho);
console.log(uav_params.uav_param_config);
console.log(uav_params.uav_param_config.uavs[0].J_vector);
console.log(uav_params.uav_param_config.uavs[0].C_arr);
console.log(uav_params.uav_param_config.uavs[1].J_vector);
console.log(uav_params.uav_param_config.uavs[1].C_arr);
