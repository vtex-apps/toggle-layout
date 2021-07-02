import React from 'react';

const ToggleLayout: StorefrontComponent = ({ renderChildren = true, children }: { renderChildren: boolean, children: React.ComponentType }) => {

  return (
    renderChildren && children
  );
};

ToggleLayout.schema = {
  title: 'admin/editor.toggle-layout.title',
  description: 'admin/editor.toggle-layout.description',
  type: 'object',
  properties: {
    renderChildren: {
      title: 'admin/editor.toggle-layout.renderChildren.title',
      type: 'boolean',
      default: true,
    }
  },
}

export default ToggleLayout;
