import { Label } from 'semantic-ui-react';
import React from 'react';
import { borderRadius} from 'polished';

let color_one = 'blue';
let color_two = 'blue';
let color_three = 'blue';
const ArrowIcon = () => (
  <div>
    <Label as='a'  style={{color:{color_one}, position: 'sticky', width: '13%', textAlign:'center',marginLeft:'30%' }}>
      Compte
    </Label>
    <Label as='a'  style={{color:{color_two}}} >
      Forfait
    </Label>
    <Label as='a' style={{color:{color_three}}}  >
      Vérification
    </Label>
  </div>
)
export default ArrowIcon;