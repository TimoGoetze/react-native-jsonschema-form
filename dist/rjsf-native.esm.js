import { utils, withTheme } from '@rjsf/core';
import React__default, { createContext, useContext, Component, useState, createElement, Fragment, useCallback, useEffect } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, LayoutAnimation, Image, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';
import { registerTranslation, de, DatePickerInput, TimePickerModal } from 'react-native-paper-dates';
import { Button } from 'react-native-paper';

var defaultProps = {
  theme: {
    primaryColor: '#2196F3',
    highlightColor: '#2196F3',
    borderColor: '#979B9E',
    textColor: '#333333',
    placeholderTextColor: '#999999',
    errorColor: '#a94442'
  },
  requiredTitle: '*',
  arrayAddTitle: 'Add'
};
var FormContext = /*#__PURE__*/createContext(defaultProps);
var useFormContext = function useFormContext() {
  return useContext(FormContext);
};

var TitleField = function TitleField(_ref) {
  var title = _ref.title,
      required = _ref.required,
      error = _ref.error;

  var _useFormContext = useFormContext(),
      requiredTitle = _useFormContext.requiredTitle,
      theme = _useFormContext.theme;

  return React__default.createElement(Text, {
    style: [styles.title, {
      color: error ? theme.errorColor : theme.textColor
    }]
  }, title, required && React__default.createElement(Text, {
    style: {
      color: theme.errorColor
    }
  }, requiredTitle));
};

var styles = /*#__PURE__*/StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 5
  }
});

var DescriptionField = function DescriptionField(_ref) {
  var description = _ref.description;

  var _useFormContext = useFormContext(),
      theme = _useFormContext.theme;

  if (description) {
    return React__default.createElement(Text, {
      style: [styles$1.description, {
        color: theme.textColor
      }]
    }, description);
  }

  return null;
};

var styles$1 = /*#__PURE__*/StyleSheet.create({
  description: {
    marginBottom: 10,
    fontSize: 14,
    color: '#333333'
  }
});

var FieldTemplate = function FieldTemplate(_ref) {
  var label = _ref.label,
      children = _ref.children,
      displayLabel = _ref.displayLabel,
      _ref$rawErrors = _ref.rawErrors,
      rawErrors = _ref$rawErrors === void 0 ? [] : _ref$rawErrors,
      rawHelp = _ref.rawHelp,
      required = _ref.required,
      rawDescription = _ref.rawDescription;

  var _useFormContext = useFormContext(),
      theme = _useFormContext.theme;

  var hasErrors = (rawErrors == null ? void 0 : rawErrors.length) > 0;
  return React__default.createElement(View, {
    style: styles$2.container
  }, displayLabel && label ? React__default.createElement(TitleField, {
    title: label,
    required: required,
    error: hasErrors
  }) : null, displayLabel && rawDescription ? React__default.createElement(DescriptionField, {
    description: rawDescription
  }) : null, children, hasErrors && rawErrors.map(function (error, i) {
    return React__default.createElement(Text, {
      key: i,
      style: [styles$2.description, styles$2.error, {
        color: theme.errorColor
      }]
    }, "\u2022", " ", error);
  }), (rawHelp == null ? void 0 : rawHelp.length) > 0 && React__default.createElement(Text, {
    style: styles$2.description
  }, rawHelp));
};

var styles$2 = /*#__PURE__*/StyleSheet.create({
  container: {
    marginBottom: 20
  },
  error: {
    marginTop: 5
  },
  description: {
    fontSize: 14,
    color: '#999999'
  }
});

var RootTitleField = function RootTitleField(_ref) {
  var title = _ref.title,
      required = _ref.required;

  var _useFormContext = useFormContext(),
      theme = _useFormContext.theme,
      requiredTitle = _useFormContext.requiredTitle;

  var themedStyle = {
    color: theme.textColor,
    borderBottomWidth: title && title.length > 0 ? 1 : 0
  };
  return React__default.createElement(Text, {
    style: [styles$3.title, themedStyle, title === '' && styles$3.hiddenHeight]
  }, title, required && React__default.createElement(Text, {
    style: {
      color: theme.errorColor
    }
  }, requiredTitle));
};

var styles$3 = /*#__PURE__*/StyleSheet.create({
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
    borderBottomColor: '#EEEEEE'
  },
  hiddenHeight: {
    height: 0
  }
});

var ObjectFieldTemplate = function ObjectFieldTemplate(_ref) {
  var description = _ref.description,
      title = _ref.title,
      properties = _ref.properties,
      required = _ref.required,
      uiSchema = _ref.uiSchema;
  return React__default.createElement(View, null, uiSchema['ui:title'] || title ? React__default.createElement(RootTitleField, {
    title: uiSchema['ui:title'] === '' ? '' : title,
    required: required
  }) : null, uiSchema['ui:description'] || description ? React__default.createElement(DescriptionField, {
    description: uiSchema['ui:description'] === '' ? '' : description
  }) : null, properties.map(function (element, index) {
    return React__default.createElement(View, {
      key: index
    }, element.content);
  }));
};

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAwCAYAAABnjuimAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKqADAAQAAAABAAAAMAAAAADdgggSAAACWUlEQVRYCe2UP08UURTFz9ssWbMFFoZkKyoKDKXllm5lInY4u+DGkGjHB9DGsdCe2AExRiUSCxONsTBIYuFH2GhBRUVipQWBiFzvHdmwAztz310GluLdZLJv3v1zfnvmzQBFR0RPINeFDSLHgIu4TZRcspa9gqKYQTGV8APLIMynuByeYxL3ELuD1P4AN6cHjamM73jF2lGG/hqu4g7D7mfkvbZPB7pAFfzEW3ZyOlfN4QPGMINnbi+3Lic5OOh9quIX3vPsRs783tQ6LuMWltxO76bvejDQWRrFPj6xSN1X6LDuG8q4gVX329iHkrUBbbqCv9jgPiukSNWTXplhDJujd6mGXazzmZwy6qTLHTq4xEfmhdtOJ7Lv/EHbNI49fOFRE9njTJlNVHAdL92WT5cf6BxN4E8COe4z1FCzhRGGfe02tR4dtElTOODHDdS0YQPmt/lNaeCN6+T1579MLbrG5/HrGUIKWy3REK2cyAadpTo7ucFDzG9ojl7/lGiIlmhmRH/QFjX4O/mZIUcz+orfFi3RFO0+cRK0STf5W/eRa6t96s96q5poC8OxSIO2KOJH8I5rKsfqzvO2kjAIS08cgUY0zwWrnCv35Ie1LCcswnQY/0GbtMDncYWvI/BuxbB+hUWYhI3D8eIB0z8dFo+XbgkP9Q9+d1JEMf/DR93bQn4dHmPNxT6zLs6jVmgDqGKQOR0cNVumNARHFYPM6eCo2TKlITiqGGROB0fNlikNwVHFIHM6OGq2TGkIjioGmdPBUbNlSkNwVDHInA6Omi1TGoKjikHm9D9o2I53D1iVsAAAAABJRU5ErkJggg==";

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAwCAYAAABnjuimAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKqADAAQAAAABAAAAMAAAAADdgggSAAACQ0lEQVRYCe2Yv0scURDHZ2IS0SIpAiH/gqS0FBGCRJCQQIq4ntgItiG1Fp6F1uHsIoRgYnKkU0EQbC1T2lldZWNjIQgm4/e7avy1t/tub2KueAPHzXs77zuf++7bx3IqoZFYVUzmQsuD6lTmpa7VkNp7IUWdUBNBve9CdDQ66u2At17co9FRbwe89eIejY56O+CtF/dodNTbAW+9uEejo94OeOvFPRod9XbAW08lsRn8p7TgLeyqpzKrqWBi7wH7EfnZ2LVLW2IGog/4I612CZbYFCSXAdwZJ4HKH/BMA/Izf+olKEcVS+S3fEV2n8P/GCfSJZPyXesXDNdBOZvYa7j6E1n3RdEdfx/Dvndwcv1q39ugvFqxYTi7hqz3avEd5Edw8g2c3L7ZKxuUVRM2ANhNuPvo5qJ/MlY5BOSorOpOln5zUFZXrB9beguwT7IWu82pHOARHoGTv5pp5oNy1bg9ByxvxbNmIm3O7wNyWH7obp5O8VFEgQcyCJFGnlDJa41UuwCS2sWgrPqmezgDCLvHoVOcaVI7IMJAKbSiDekBrEruLQroydN7N9WiZmCEg1Lwi+7LQxlCo6abvrAv11KDWi1Ea6AUXtEDHCMvkGUeIwW9d9K11GgxWgdlg1U9lMfyEtmtgzmn/3a6hmtLRDlQNvqkR/JUXiHbCOi7kdZyTckoD8qGS3osffIW2d+XhwyOelrD2jaiPVA2ruoJQCbwgKWvY9dYOMdrrOmYMFMZsxo+dv6pCec6NhJbxKviojffKUVeesbX1YC1AAAAAElFTkSuQmCC";

var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABCCAYAAAAL1LXDAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAPKADAAQAAAABAAAAQgAAAADu9ZXIAAADnklEQVRoBe1bP2/TQBR/z3VQSTp0qgQFMSAmJmBDfAWoksLADio7/Rj9AFRiZ4Am/PkKqBtlYuyAIEXqxNCECkKOe04sFPud7fP54otyWSK/e/fe73c/39ln+yFU+BNC4HBz+z6g6CDgXRBwSYBY00kh+50Bwg/Z7xAEdpv9gw+IKHRiZPliVqNO2+9rndt/RvAShLil0y/fF48aDXh64Wv3KN8336MSwoOrD7dwPH4lFb6Yn1LfQyr8SwTB49a3N+/0e8/2MCZMyo5G8NEW2RgukQ5DuGeqdBAHLPNPc5ZOY9tkCRvlmOYyEsmIcLRAVT5nM4Ze5opyZrjkNYV5DpntcjWWK3HqRyutQNhtrooeHvdOUw4ZBnG9vTE8x7Zcl/fYFZ5yArzPCJHZZESYLj0SVCoBkW31u/uphgKG6QDtDzYlLwEvkl2iy13SqHFsdErTdZbLRcpydh2bMoYiZ9HYRoTZU05m1j2NObCqGKqcXAzOZkSYC+i6bekIo7j5aO3859+9sYC2XCU2XFeoHD48DRB6q+sru+GErNgpF2hReokNKeiO5ArBRNlFAW6Gk7gu3RwO5N7zrdm4LU5vmsdhc33luTy3xbIsWsqdx+ByO33PKMVsnfSUferQWhfnEs7hOmSpMadXuMbBn0tqr/BchrnGJF7hGgd/LqmNnmmpEM5uOQHirRl+eX3G9dH152IUtVkhnNxyxlszCeoZB0zXn4tR1GZlDnNbTs4Wg+TaOFvsb/JvhTD/5CTraQrXxtlMqE76WiJsDsxWBE/Y1si6Etcr7IoStnB4hW2NrCtxvcKuKGELh1fY1si6Etcr7IoStnB4hW2NrCtxvcKuKGELhyWFkfn6jrPFtLg2zhb7l/+3Q5h5yU5PLpUwdf2VgfIbrDy1nH3J/v8xLfR5QLr+fJRiVuXLbd0XzcXSVe+li9POKV09r8oiesKVDaWjgbzCjgpTGSylwlHBFJOGPtFnzLWYVFhU2AmkkjBVh3EsqB6Bs9dhU2JRYCeMyhsP+eX5oWy/kSRCxRdUj1CmgCMZq+zxbCFIOsoUe7pBWjJuPDoP5FtA40owNqt1I261Trps5YuSMBVhDa9sf6q+ltAyW8TPze8Hd1QFmso5TB0aITyhEjjLECsLT1inmNnvRCmRkjA1Up0fFTkuAmnCSFjzahMzCRNpquikIkeQpwodO/mT2AhjkepT5RxOEovmtGExdDJm2ePoOluyqPof8OheyMKWxj8AAAAASUVORK5CYII=";

var isMultiSelect = utils.isMultiSelect,
    getDefaultRegistry = utils.getDefaultRegistry;

var ArrayFieldTemplate = function ArrayFieldTemplate(props) {
  var schema = props.schema,
      _props$registry = props.registry,
      registry = _props$registry === void 0 ? getDefaultRegistry() : _props$registry;

  if (isMultiSelect(schema, registry.definitions)) {
    return React__default.createElement(DefaultFixedArrayFieldTemplate, Object.assign({}, props));
  } else {
    return React__default.createElement(DefaultNormalArrayFieldTemplate, Object.assign({}, props));
  }
};

var ArrayFieldTitle = function ArrayFieldTitle(_ref) {
  var title = _ref.title,
      required = _ref.required;

  if (!title) {
    return null;
  }

  return React__default.createElement(TitleField, {
    title: title,
    required: required
  });
};

var ArrayFieldDescription = function ArrayFieldDescription(_ref2) {
  var description = _ref2.description;

  if (!description) {
    return null;
  }

  return React__default.createElement(DescriptionField, {
    description: description
  });
}; // Used in the two templates


var DefaultArrayItem = function DefaultArrayItem(props) {
  return React__default.createElement(View, {
    style: styles$4.arrayItem,
    key: props.index
  }, React__default.createElement(View, {
    style: styles$4.card
  }, props.children), React__default.createElement(View, {
    style: styles$4.actionRow
  }, props.hasMoveUp && React__default.createElement(TouchableOpacity, {
    style: styles$4.actionButton,
    onPress: function onPress() {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      props.onReorderClick(props.index, props.index - 1)();
    }
  }, React__default.createElement(Image, {
    style: styles$4.image,
    source: {
      uri: img
    }
  })), props.hasMoveDown && React__default.createElement(TouchableOpacity, {
    style: styles$4.actionButton,
    onPress: function onPress() {
      props.onReorderClick(props.index, props.index + 1)();
    }
  }, React__default.createElement(Image, {
    style: styles$4.image,
    source: {
      uri: img$1
    }
  })), props.hasRemove && React__default.createElement(TouchableOpacity, {
    disabled: props.disabled || props.readonly,
    style: styles$4.actionButton,
    onPress: function onPress() {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      props.onDropIndexClick(props.index)();
    }
  }, React__default.createElement(Image, {
    style: styles$4.image,
    source: {
      uri: img$2
    }
  }))));
};

var AddButton = function AddButton(props) {
  var context = useFormContext();
  return React__default.createElement(TouchableOpacity, {
    style: [styles$4.addButton, {
      backgroundColor: context.theme.primaryColor
    }],
    onPress: function onPress(e) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      props.onPress(e);
    },
    disabled: props.disabled
  }, React__default.createElement(Text, {
    style: styles$4.addButtonText
  }, context.arrayAddTitle));
};

var DefaultFixedArrayFieldTemplate = function DefaultFixedArrayFieldTemplate(props) {
  return React__default.createElement(View, {
    style: styles$4.container
  }, React__default.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && React__default.createElement(DescriptionField, {
    description: props.uiSchema['ui:description'] || props.schema.description
  }), React__default.createElement(View, {
    style: styles$4.content
  }, props.items && props.items.map(DefaultArrayItem)), props.canAdd && React__default.createElement(AddButton, {
    disabled: props.disabled || props.readonly,
    onPress: props.onAddClick
  }));
};

var DefaultNormalArrayFieldTemplate = function DefaultNormalArrayFieldTemplate(props) {
  return React__default.createElement(View, {
    style: styles$4.container
  }, React__default.createElement(ArrayFieldTitle, {
    key: "array-field-title-" + props.idSchema.$id,
    TitleField: props.TitleField,
    idSchema: props.idSchema,
    title: props.uiSchema['ui:title'] || props.title,
    required: props.required
  }), (props.uiSchema['ui:description'] || props.schema.description) && React__default.createElement(ArrayFieldDescription, {
    key: "array-field-description-" + props.idSchema.$id,
    DescriptionField: props.DescriptionField,
    idSchema: props.idSchema,
    description: props.uiSchema['ui:description'] || props.schema.description
  }), React__default.createElement(View, {
    style: styles$4.content
  }, props.items && props.items.map(function (p) {
    return DefaultArrayItem(p);
  })), props.canAdd && React__default.createElement(AddButton, {
    disabled: props.disabled || props.readonly,
    onPress: props.onAddClick
  }));
};

var styles$4 = /*#__PURE__*/StyleSheet.create({
  container: {
    marginBottom: 10
  },
  content: {
    marginTop: 10
  },
  arrayItem: {
    marginBottom: 10
  },
  card: {
    paddingBottom: 20,
    borderRadius: 5
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  actionButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    marginTop: 20,
    height: 44,
    backgroundColor: '#0057FF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600'
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  }
});

var ErrorList = function ErrorList(_ref) {
  var errors = _ref.errors;
  return React__default.createElement(View, {
    style: styles$5.container
  }, React__default.createElement(Text, {
    style: styles$5.title
  }, "Errors"), errors.map(function (error, i) {
    return React__default.createElement(Text, {
      style: styles$5.error,
      key: i
    }, error.stack);
  }));
};

var styles$5 = /*#__PURE__*/StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fadee2',
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10
  },
  error: {
    color: 'black'
  }
});

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Event = /*#__PURE__*/function () {
  function Event() {}

  var _proto = Event.prototype;

  _proto.preventDefault = function preventDefault() {};

  return Event;
}(); // @ts-ignore


global.Event = global.Event || Event; // @ts-ignore

global.CustomEvent = global.CustomEvent || Event;
var MockHTMLForm = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MockHTMLForm, _Component);

  function MockHTMLForm() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto2 = MockHTMLForm.prototype;

  _proto2.render = function render() {
    // @ts-ignore
    return React__default.createElement(View, null, this.props.children);
  };

  _proto2.dispatchEvent = function dispatchEvent(e) {
    // @ts-ignore
    e.persist = function () {
      return null;
    }; // @ts-ignore


    this.props.onSubmit(e);
  };

  return MockHTMLForm;
}(Component);

var TextWidget = function TextWidget(_ref) {
  var id = _ref.id,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      _onBlur = _ref.onBlur,
      _onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      multiline = _ref.multiline,
      secureEntry = _ref.secureEntry,
      schema = _ref.schema,
      _ref$textContentType = _ref.textContentType,
      textContentType = _ref$textContentType === void 0 ? 'none' : _ref$textContentType,
      rawErrors = _ref.rawErrors;

  var _useFormContext = useFormContext(),
      theme = _useFormContext.theme;

  var _useState = useState(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var themedStyle = {
    borderColor: (rawErrors == null ? void 0 : rawErrors.length) > 0 ? theme.errorColor : focused ? theme.highlightColor : theme.borderColor,
    borderWidth: focused ? 2 : 1,
    color: theme.textColor
  };
  return React__default.createElement(TextInput, {
    multiline: multiline,
    placeholder: label,
    autoFocus: autofocus,
    editable: !disabled && !readonly,
    keyboardType: schema.type === 'number' ? 'numeric' : 'default',
    value: value ? value.toString() : '',
    secureTextEntry: secureEntry,
    textContentType: textContentType,
    onChangeText: function onChangeText(newText) {
      return onChange(newText === '' ? options.emptyValue : newText);
    },
    onBlur: function onBlur() {
      setFocused(false);

      _onBlur(id, value);
    },
    onFocus: function onFocus() {
      setFocused(true);

      _onFocus(id, value);
    },
    selectionColor: theme.highlightColor,
    placeholderTextColor: theme.placeholderTextColor,
    style: [styles$6.input, themedStyle, multiline && styles$6.multiline]
  });
};

var styles$6 = /*#__PURE__*/StyleSheet.create({
  input: {
    borderColor: '#979B9E',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 4,
    fontSize: 16,
    color: '#333333'
  },
  multiline: {
    minHeight: 100,
    lineHeight: 22
  }
});

var TextareaWidget = function TextareaWidget(props) {
  return React__default.createElement(TextWidget, Object.assign({}, props, {
    multiline: true
  }));
};

var CheckboxWidget = function CheckboxWidget(_ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      label = _ref.label,
      onChange = _ref.onChange,
      schema = _ref.schema;
  return React__default.createElement(React__default.Fragment, null, schema.description ? React__default.createElement(DescriptionField, {
    description: schema.description
  }) : null, React__default.createElement(CheckBoxComponent, {
    label: schema.title || label,
    selected: value,
    onChange: onChange,
    disabled: disabled || readonly
  }));
};

var CheckBoxComponent = function CheckBoxComponent(_ref2) {
  var disabled = _ref2.disabled,
      onChange = _ref2.onChange,
      selected = _ref2.selected,
      label = _ref2.label;

  var _useFormContext = useFormContext(),
      theme = _useFormContext.theme;

  var themedStyle = {
    borderColor: selected ? theme.highlightColor : theme.textColor,
    backgroundColor: selected ? theme.highlightColor : 'transparent'
  };
  var themedTextStyle = {
    color: theme.textColor
  };
  return React__default.createElement(TouchableOpacity, {
    style: styles$7.container,
    disabled: disabled,
    onPress: function onPress() {
      return onChange(!selected);
    }
  }, React__default.createElement(View, {
    style: [styles$7.checkbox, themedStyle]
  }, selected && React__default.createElement(Text, {
    style: styles$7.check
  }, "\u2713")), React__default.createElement(Text, {
    style: [styles$7.text, themedTextStyle]
  }, label));
};
var styles$7 = /*#__PURE__*/StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  checkbox: {
    width: 18,
    height: 18,
    marginRight: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  check: {
    color: 'white'
  },
  text: {
    fontSize: 14,
    color: 'black'
  }
});

var selectValue = function selectValue(value, selected, all) {
  var at = all.indexOf(value);
  var updated = selected.slice(0, at).concat(value, selected.slice(at)); // As inserting values at predefined index positions doesn't work with empty
  // arrays, we need to reorder the updated selection to match the initial order

  return updated.sort(function (a, b) {
    return all.indexOf(a) - all.indexOf(b);
  });
};

var deselectValue = function deselectValue(value, selected) {
  return selected.filter(function (v) {
    return v !== value;
  });
};

var CheckboxesWidget = function CheckboxesWidget(_ref) {
  var disabled = _ref.disabled,
      options = _ref.options,
      value = _ref.value,
      readonly = _ref.readonly,
      onChange = _ref.onChange;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var _onChange = function _onChange(option) {
    return function (checked) {
      var all = enumOptions.map(function (_ref2) {
        var v = _ref2.value;
        return v;
      });

      if (checked) {
        onChange(selectValue(option.value, value, all));
      } else {
        onChange(deselectValue(option.value, value));
      }
    };
  };

  return React__default.createElement(View, null, enumOptions.map(function (option, index) {
    var checked = value.indexOf(option.value) !== -1;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    return React__default.createElement(CheckBoxComponent, {
      key: index,
      onChange: _onChange(option),
      selected: checked,
      label: option.label,
      disabled: disabled || itemDisabled || readonly
    });
  }));
};

var PasswordWidget = function PasswordWidget(props) {
  return React__default.createElement(TextWidget, Object.assign({}, props, {
    secureEntry: true
  }));
};

var RadioWidget = function RadioWidget(_ref) {
  var options = _ref.options,
      value = _ref.value,
      disabled = _ref.disabled,
      readonly = _ref.readonly,
      onChange = _ref.onChange,
      rawErrors = _ref.rawErrors;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;

  var _useFormContext = useFormContext(),
      theme = _useFormContext.theme,
      radioLabelMapping = _useFormContext.radioLabelMapping;

  var hasErrors = (rawErrors == null ? void 0 : rawErrors.length) > 0;

  var onPress = function onPress(newValue) {
    return function () {
      return onChange(newValue);
    };
  };

  return React__default.createElement(View, null, enumOptions.map(function (option, i) {
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    var selected = option.value === value;
    var label = radioLabelMapping ? radioLabelMapping(option.label) : option.label;
    var color = hasErrors ? theme.errorColor : selected ? theme.highlightColor : theme.textColor;
    return React__default.createElement(TouchableOpacity, {
      key: i,
      style: styles$8.container,
      disabled: disabled || itemDisabled || readonly,
      onPress: onPress(option.value)
    }, React__default.createElement(View, {
      style: [styles$8.radioButton, {
        borderColor: color
      }]
    }, selected && React__default.createElement(View, {
      style: [styles$8.radioButtonFilled, {
        backgroundColor: theme.highlightColor
      }]
    })), React__default.createElement(Text, {
      style: [styles$8.text, {
        color: color
      }]
    }, label));
  }));
};
var styles$8 = /*#__PURE__*/StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  radioButton: {
    width: 18,
    height: 18,
    borderRadius: 18,
    borderWidth: 1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  radioButtonFilled: {
    width: 12,
    height: 12,
    borderRadius: 12
  },
  text: {
    fontSize: 14
  }
});

var rangeSpec = utils.rangeSpec;

var RangeWidget = function RangeWidget(_ref) {
  var value = _ref.value,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      schema = _ref.schema,
      onChange = _ref.onChange;

  var _useFormContext = useFormContext(),
      theme = _useFormContext.theme;

  var _rangeSpec = rangeSpec(schema),
      _rangeSpec$min = _rangeSpec.min,
      min = _rangeSpec$min === void 0 ? 0 : _rangeSpec$min,
      _rangeSpec$step = _rangeSpec.step,
      step = _rangeSpec$step === void 0 ? 1 : _rangeSpec$step,
      _rangeSpec$max = _rangeSpec.max,
      max = _rangeSpec$max === void 0 ? 100 : _rangeSpec$max;

  return React__default.createElement(View, {
    style: styles$9.container
  }, React__default.createElement(Text, {
    style: [styles$9.ends, {
      color: theme.textColor
    }]
  }, min), React__default.createElement(Slider, {
    style: styles$9.slider,
    value: value,
    step: step,
    disabled: disabled || readonly,
    minimumValue: min,
    maximumValue: max,
    onValueChange: onChange,
    thumbTintColor: theme.highlightColor,
    minimumTrackTintColor: theme.highlightColor
  }), React__default.createElement(Text, {
    style: [styles$9.ends, {
      color: theme.highlightColor
    }]
  }, value));
};

var styles$9 = /*#__PURE__*/StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  ends: {
    fontSize: 14,
    color: 'gray'
  },
  slider: {
    flex: 1,
    marginHorizontal: 15,
    height: 40
  }
});

var EmailWidget = function EmailWidget(props) {
  return React__default.createElement(TextWidget, Object.assign({}, props, {
    textContentType: 'emailAddress'
  }));
};

var URLWidget = function URLWidget(props) {
  return React__default.createElement(TextWidget, Object.assign({}, props, {
    textContentType: 'URL'
  }));
};

var HiddenWidget = function HiddenWidget() {
  return React__default.createElement(View, {
    style: styles$a.hidden
  });
};

var styles$a = /*#__PURE__*/StyleSheet.create({
  hidden: {
    width: 0,
    height: 0
  }
});

registerTranslation('de', de);

var DateWidget = function DateWidget(props) {
  var onChange = props.onChange,
      value = props.value;
  console.log("Datewidget DEBUG " + value);
  var startDate = value || +new Date();

  var onDateChange = function onDateChange(selectedDate) {
    console.log("Datewidget DEBUG onDateChange " + selectedDate);
    var currentDate = selectedDate || new Date();
    onChange(+currentDate); //date as timestamp
  };

  return createElement(Fragment, null, createElement(DatePickerInput, {
    locale: "de",
    label: props.label,
    value: new Date(startDate),
    onChange: onDateChange,
    inputMode: "start",
    mode: "outlined"
  }));
};

registerTranslation('de', de);

var TimeWidget = function TimeWidget(props) {
  var onChange = props.onChange,
      value = props.value;
  var startDate = value || +new Date();

  var onDateChange = function onDateChange(selectedDate) {
    var currentDate = selectedDate || new Date();
    onChange(+currentDate); //date as timestamp
  };

  var TimePickerPage = function TimePickerPage() {
    var _React$useState = useState(false),
        visible = _React$useState[0],
        setVisible = _React$useState[1];

    var onDismiss = useCallback(function () {
      setVisible(false);
    }, [setVisible]);
    var startTime = new Date(props.value) || new Date(0);
    console.log(JSON.stringify(startTime));
    var onConfirm = useCallback( // @ts-ignore
    function (_ref) {
      var hours = _ref.hours,
          minutes = _ref.minutes;
      setVisible(false);
      onDateChange(new Date(0).setHours(hours, minutes));
    }, [setVisible]);

    var zeroPad = function zeroPad(num, places) {
      return String(num).padStart(places, '0');
    };

    return createElement(Fragment, null, createElement(TimePickerModal, {
      visible: visible,
      onDismiss: onDismiss,
      onConfirm: onConfirm,
      hours: startTime.getHours(),
      minutes: startTime.getMinutes(),
      label: props.label,
      uppercase: false,
      cancelLabel: "Cancel" // optional, default: 'Cancel'
      ,
      confirmLabel: "Ok" // optional, default: 'Ok'
      ,
      animationType: "fade" // optional, default is 'none'
      ,
      locale: "de" // optional, default is automically detected by your system

    }), createElement(Button, {
      onPress: function onPress() {
        return setVisible(true);
      }
    }, zeroPad(startTime.getHours(), 2) + ":" + zeroPad(startTime.getMinutes(), 2)));
  };

  return createElement(Fragment, null, createElement(TimePickerPage // @ts-ignore
  , {
    // @ts-ignore
    locale: "de",
    //label={props.label}
    value: new Date(startDate),
    onConfirm: onDateChange,
    inputMode: "start",
    mode: ""
  }));
};

var Widgets = {
  TextWidget: TextWidget,
  EmailWidget: EmailWidget,
  URLWidget: URLWidget,
  TextareaWidget: TextareaWidget,
  CheckboxWidget: CheckboxWidget,
  CheckboxesWidget: CheckboxesWidget,
  PasswordWidget: PasswordWidget,
  RadioWidget: RadioWidget,
  SelectWidget: RadioWidget,
  RangeWidget: RangeWidget,
  HiddenWidget: HiddenWidget,
  DateWidget: DateWidget,
  TimeWidget: TimeWidget
};

var _excluded = ["widget"];
var getUiOptions = utils.getUiOptions,
    getWidget = utils.getWidget,
    guessType = utils.guessType,
    retrieveSchema = utils.retrieveSchema,
    getDefaultFormState = utils.getDefaultFormState,
    getMatchingOption = utils.getMatchingOption;

var _getMatchingOption = function _getMatchingOption(_ref) {
  var formData = _ref.formData,
      options = _ref.options,
      rootSchema = _ref.rootSchema,
      selectedOptionIndex = _ref.selectedOptionIndex;
  var option = getMatchingOption(formData, options, rootSchema);

  if (option !== 0) {
    return option;
  } // If the form data matches none of the options, use the currently selected
  // option, assuming it's available; otherwise use the first option


  return selectedOptionIndex;
};

var AnyOfField = function AnyOfField(_ref2) {
  var formData = _ref2.formData,
      options = _ref2.options,
      registry = _ref2.registry,
      onChange = _ref2.onChange,
      baseType = _ref2.baseType,
      disabled = _ref2.disabled,
      errorSchema = _ref2.errorSchema,
      idPrefix = _ref2.idPrefix,
      idSchema = _ref2.idSchema,
      onBlur = _ref2.onBlur,
      onFocus = _ref2.onFocus,
      uiSchema = _ref2.uiSchema,
      schema = _ref2.schema;
  // rootSchema is in registry but is not defined FieldProps
  // @ts-ignore
  var rootSchema = registry.rootSchema;

  var _useState = useState(_getMatchingOption({
    formData: formData,
    options: options,
    rootSchema: rootSchema,
    selectedOptionIndex: 0
  })),
      selectedOptionIndex = _useState[0],
      setSelectedOptionIndex = _useState[1];

  useEffect(function () {
    var matchingOption = _getMatchingOption({
      formData: formData,
      options: options,
      rootSchema: rootSchema,
      selectedOptionIndex: selectedOptionIndex
    });

    if (matchingOption !== selectedOptionIndex) {
      setSelectedOptionIndex(matchingOption);
    }
  }, [formData, setSelectedOptionIndex, selectedOptionIndex, options, rootSchema]);

  var onOptionChange = function onOptionChange(value) {
    var selected = parseInt(value, 10);
    var newOption = retrieveSchema(options[selected], rootSchema, formData); // If the new value is of type object and the current data is an object,
    // discard properties added using the old option.

    var newFormData;

    if (guessType(formData) === 'object' && (newOption.type === 'object' || newOption.properties)) {
      newFormData = Object.assign({}, formData);
      var optionsToDiscard = options.slice();
      optionsToDiscard.splice(selectedOptionIndex, 1); // Discard any data added using other options

      for (var _iterator = _createForOfIteratorHelperLoose(optionsToDiscard), _step; !(_step = _iterator()).done;) {
        var option = _step.value;

        if (option.properties) {
          for (var key in option.properties) {
            if (newFormData.hasOwnProperty(key)) {
              delete newFormData[key];
            }
          }
        }
      }
    } // Call getDefaultFormState to make sure defaults are populated on change.


    onChange(getDefaultFormState(options[selectedOptionIndex], newFormData, rootSchema));
    setSelectedOptionIndex(parseInt(value, 10));
  };

  var SchemaField = registry.fields.SchemaField;
  var widgets = registry.widgets; // @ts-ignore

  var _getUiOptions = getUiOptions(uiSchema),
      _getUiOptions$widget = _getUiOptions.widget,
      widget = _getUiOptions$widget === void 0 ? 'select' : _getUiOptions$widget,
      uiOptions = _objectWithoutPropertiesLoose(_getUiOptions, _excluded);

  var Widget = getWidget({
    type: 'number'
  }, widget, widgets);
  var selectedOption = options[selectedOptionIndex] || null;
  var optionSchema;

  if (selectedOption) {
    // If the subschema doesn't declare a type, infer the type from the
    // parent schema
    optionSchema = selectedOption.type ? selectedOption : Object.assign({}, selectedOption, {
      type: baseType
    });
  }

  var enumOptions = options.map(function (option, index) {
    return {
      label: option.title || "Option " + (index + 1),
      value: index
    };
  });
  return React__default.createElement(View, {
    style: styles$b.container
  }, React__default.createElement(View, {
    style: styles$b.formGroup
  }, React__default.createElement(Widget, Object.assign({
    id: "" + idSchema.$id + (schema.oneOf ? '__oneof_select' : '__anyof_select'),
    schema: {
      type: 'number',
      "default": 0
    },
    onChange: onOptionChange,
    onBlur: onBlur,
    onFocus: onFocus,
    value: selectedOptionIndex,
    options: {
      enumOptions: enumOptions
    }
  }, uiOptions))), selectedOption !== null &&
  /* @ts-ignore */
  React__default.createElement(SchemaField, {
    schema: optionSchema,
    uiSchema: uiSchema,
    errorSchema: errorSchema,
    idSchema: idSchema,
    idPrefix: idPrefix,
    formData: formData,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    registry: registry,
    disabled: disabled
  }));
};
var styles$b = /*#__PURE__*/StyleSheet.create({
  container: {
    paddingBottom: 0,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#979B9E',
    padding: 15
  },
  formGroup: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  }
});

var pseudoFormatSchema = function pseudoFormatSchema(schema) {
  var _JSON$stringify, _JSON$stringify$repla, _JSON$stringify$repla2;

  return (_JSON$stringify = JSON.stringify(schema)) == null ? void 0 : (_JSON$stringify$repla = _JSON$stringify.replace(/,/g, ',\n')) == null ? void 0 : (_JSON$stringify$repla2 = _JSON$stringify$repla.replace(/\{/g, '{\n')) == null ? void 0 : _JSON$stringify$repla2.replace(/\}/g, '\n}');
};

var UnsupportedField = function UnsupportedField(_ref) {
  var _Object$keys;

  var reason = _ref.reason,
      idSchema = _ref.idSchema,
      schema = _ref.schema;

  var _useFormContext = useFormContext(),
      theme = _useFormContext.theme;

  return React__default.createElement(View, null, React__default.createElement(Text, {
    style: {
      color: theme.errorColor
    }
  }, "Unsupported field schema for field ", React__default.createElement(Text, {
    style: styles$c.fieldId
  }, idSchema == null ? void 0 : idSchema.$id), ": ", React__default.createElement(Text, {
    style: styles$c.reason
  }, reason)), React__default.createElement(View, {
    style: styles$c.schemaContainer
  }, schema && ((_Object$keys = Object.keys(schema)) == null ? void 0 : _Object$keys.length) > 0 && React__default.createElement(Text, {
    style: styles$c.alignment
  }, pseudoFormatSchema(schema))));
};

var styles$c = /*#__PURE__*/StyleSheet.create({
  fieldId: {
    backgroundColor: '#FFCCCC'
  },
  reason: {
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  schemaContainer: {
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    borderColor: 'black'
  },
  alignment: {
    textAlign: 'left'
  }
});

var Fields = {
  TitleField: TitleField,
  AnyOfField: AnyOfField,
  OneOfField: AnyOfField,
  UnsupportedField: UnsupportedField
};

var Theme = {
  widgets: Widgets,
  fields: Fields,
  FieldTemplate: FieldTemplate,
  ObjectFieldTemplate: ObjectFieldTemplate,
  ArrayFieldTemplate: ArrayFieldTemplate,
  ErrorList: ErrorList,
  tagName: MockHTMLForm
};

var RNForm = /*#__PURE__*/withTheme(Theme);

export default RNForm;
export { ArrayFieldTemplate, ErrorList, FieldTemplate, Fields, FormContext, MockHTMLForm, ObjectFieldTemplate, RNForm, Theme, Widgets, defaultProps, useFormContext };
//# sourceMappingURL=rjsf-native.esm.js.map
