import React from 'react';
import { View } from 'react-native';
import { ObjectFieldTemplateProps } from '@rjsf/core';
import DescriptionField from './DescriptionField';
import RootTitleField from './RootTitleField';

const ObjectFieldTemplate = ({
                               description,
                               title,
                               properties,
                               required,
                               uiSchema,
                             }: ObjectFieldTemplateProps) => {

  return (
    <View>
      {
        (uiSchema[ 'ui:title' ] || title) ? <RootTitleField title={ uiSchema[ 'ui:title' ] === '' ? '' : title } required={ required }/> : null
      }
      {
        (uiSchema[ 'ui:description' ] || description) ? <DescriptionField description={ uiSchema[ 'ui:description' ] === '' ? '' : description }/> : null
      }
      {
        properties.map((element: any, index: number) => (
          <View key={ index }>
            { element.content }
          </View>
        ))
      }
    </View>
  );
};

export default ObjectFieldTemplate;
