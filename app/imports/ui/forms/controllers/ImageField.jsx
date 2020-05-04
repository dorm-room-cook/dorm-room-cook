import Ajv from 'ajv';
import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import classnames from 'classnames';
import React from 'react';
import { AutoForm, SubmitField } from 'uniforms-semantic';
import { connectField } from 'uniforms';

const ajv = new Ajv({ allErrors: true, useDefaults: true });

const schema = {
  title: 'Guest',
  type: 'object',
  properties: {
    pictureUrl: { type: 'string' },
  },
};

function createValidator(schema) {
  const validator = ajv.compile(schema);

  return model => {
    validator(model);

    if (validator.errors && validator.errors.length) {
      throw { details: validator.errors };
    }
  };
}

const schemaValidator = createValidator(schema);

const bridge = new JSONSchemaBridge(schema, schemaValidator);

export default bridge;

function Image({ onChange, value }) {
  const imgPlaceholder = 'https://picsum.photos/150?grayscale';

  function onImageChange({ target: { files } }) {
    if (files && files[0]) {
      onChange(URL.createObjectURL(files[0]));
    }
  }

  return (
      <div className="ImageField">
        <label htmlFor="file-input">
          <div>Choose your photo</div>
          <img
              style={{ cursor: 'pointer', width: '150px', height: '150px' }}
              src={value || imgPlaceholder}
          />
        </label>
        <input
            accept="image/*"
            id="file-input"
            onChange={onImageChange}
            style={{ display: 'none' }}
            type="file"
        />
      </div>
  );
}

const ImageField = connectField(Image);

function ExampleOfSubmitField() {
  return (
      <AutoForm
          schema={schema}
          onSubmit={model => alert(JSON.stringify(model, null, 2))}
      >
        <div style={{ textAlign: 'center' }}>
          <ImageField name="pictureUrl" />
          <SubmitField />
        </div>
      </AutoForm>
  );
}
