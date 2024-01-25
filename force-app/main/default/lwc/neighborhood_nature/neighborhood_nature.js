import { LightningElement } from 'lwc';
import NeighborhoodImages from "@salesforce/resourceUrl/NeighborhoodImages"

export default class Neighborhood_nature extends LightningElement {
  description=[
    {
      id:1,
      image:NeighborhoodImages+'/Karuizawa_Taliesin.jpg',
      title:'KARUIZAWA TALIESIN',
      content:'The Karuizawa Taliesin is a great place to enjoy the great outdoors with your family all year round. The facilities surrounding Lake Shiozawa offer a variety of activities for both parents and children to enjoy. For those interested in art, literature, or history, there are plenty of options to choose from. And for those looking for a more active adventure, the lake offers hand-pulled boats, pedal boats, and bicycle-type water striders. The go-cart track and the cycle monorail are also popular attractions. No matter what your interests are, there’s something for everyone at the Karuizawa Taliesin!'
    },
    {
      id:2,
      image:NeighborhoodImages+'/shiraito.jpg',
      title:'SHIRAITO FALLS',
      content:'You can find the Shiraito Falls in the southwestern foothills of Mount Fuji. The 150 meter wide waterfall is one of Japan’s most beautiful waterfalls. It is fed by the volanco’s springs and flows off the edge of a 20 meter high cliff in thin streams that resemble white silk. There is an easy trail leading to the base of the waterfall just a few minutes from the road.'
    },
    {
      id:3,
      image:NeighborhoodImages+'/kumobaike.jpeg',
      title:'KUMOBAIKE',
      content:'Located on the border between Nagano and Gunma prefectures, the pond commands panoramic views of the three mountains of Jyoshu, the Nikko mountain range, the majestic Mount Asama and Mount Yatsugatake, as well as colorful autumn leaves that spread between the mountains.'
    },
    {
      id:4,
      image:NeighborhoodImages+'/hanareyama.jpg',
      title:'MT. HANAREYAMA',
      content:'Mt. Hanareyama is an extinct lava dome and side volcano of Asama Volcano, which some refer to as ‘Table Mountain’ due to its conical shape and flat top. Getting to the top of the mountain takes about an hour, and the path is well-maintained.'
    },
  ]
}
