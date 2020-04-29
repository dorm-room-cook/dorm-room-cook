import React from 'react';
import { Image, Input, Dropdown, Form, Button } from 'semantic-ui-react';

//these 3 consts are the styles for some of the divs
const container = {
  display: 'flex',
  flexDirection: 'row',
  padding: '10px',
};

const quickInfo = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  fontWeight: 'bold',
  margin: '10px 0px',
};

const leftContainer = {
  display: 'flex',
  flexDirection: 'row',
};

/** Renders the Page for adding a document. */
class AddRecipe extends React.Component {

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    // example dropdown selections for now
    // todo move these selections into settings.json possibly
    const tools = [
      { key: 'bowl', text: 'Bowl', value: 'bowl' },
      { key: 'microwave', text: 'Microwave', value: 'mw' },
      { key: 'ricecooker', text: 'Rice Cooker', value: 'ricecooker' },
      { key: 'spoon', text: 'Spoon', value: 'spoon' },
      { key: 'oven', text: 'Oven', value: 'oven' },
    ];
    const ingredients = [
      { key: 'apple', text: 'Apple', value: 'apple' },
      { key: 'butter', text: 'Butter', value: 'butter' },
      { key: 'rice', text: 'Rice', value: 'rice' },
      { key: 'icecream', text: 'Ice Cream', value: 'icecream' },
    ];
    return (
        <div style={{ margin: '0px 60px' }}>
          <div style={container}>
            {/* div for the form elements */}
            {/* todo change the inputs to forms */}
            <div style={{ flex: 3, margin: '5px' }}>
              <Input placeholder='Add Recipe Name' size='massive' fluid/>
              <div style={quickInfo}>
                <Input placeholder='total time' size='large'/>
                <Input placeholder='total cost' size='large'/>
                <Input placeholder='# of servings' size='large'/>
              </div>
              <div style={leftContainer}>
                <div style={{ flex: 1, margin: '5px' }}>
                  <Dropdown placeholder='Tools' fluid multiple selection allowAdditions options={tools}/>
                  <br/>
                  <br/>
                  <Dropdown placeholder='Ingredients' fluid multiple selection allowAdditions options={ingredients}/>
                </div>
                <div style={{ flex: 1, margin: '5px' }}>
                  <Form>
                    <Form.TextArea placeholder='Instructions to make this recipe...'/>
                  </Form>
                </div>
              </div>
            </div>
            {/* div for the picture */}
            <div style={{ flex: 2 }}>
              <Image src='/images/foodplaceholder.png' fluid/>
              <Input placeholder='Image url...' style={{ marginLeft: '30%', width: '40%' }}/>
            </div>
          </div>
          <div>
            <Button content='Upload Recipe' fluid/>
          </div>
        </div>
    );
  }
}

export default AddRecipe;
