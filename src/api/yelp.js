import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer iZEZk7XFxel6j3Qan3LPiT4aOT0GBCtBdql7T87hEcVVeAUlPIvgaMsPSePCernxLNufYvEykrMQIbjiirZoeDN-T3kRNAPYewTWj_5mDDMVqcGskByvuC5_uZ9dXXYx'
  }
});
